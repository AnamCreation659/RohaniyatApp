import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  Modal,
  Animated,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import CustomBackground from "../../../../../components/Background/Background";

export default function RohaniIlaj() {
  const [formData, setFormData] = useState({
    patientName: "",
    fatherName: "",
    motherName: "",
    country: "",
    cityName: "",
    whatsappNumber: "",
    email: "",
    disease: "",
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalMsg, setModalMsg] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const slideAnim = useRef(new Animated.Value(-300)).current;

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: null }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value) {
        newErrors[key] = `Please fill in the ${formatKey(key)}`;
      } else {
        if (key === "email" && !value.endsWith("@gmail.com")) {
          newErrors[key] = "Only Gmail addresses allowed";
        }
        if (["age", "whatsappNumber"].includes(key) && isNaN(value)) {
          newErrors[key] = `${formatKey(key)} must be a number`;
        }
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatKey = (key) =>
    key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase());

  const showAnimatedModal = (msg) => {
    setModalMsg(msg);
    setShowModal(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(slideAnim, {
          toValue: -700,
          duration: 700,
          useNativeDriver: true,
        }).start(() => {
          setShowModal(false);
        });
      }, 2500);
    });
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      showAnimatedModal("Please fix the errors above.");
      return;
    }

    try {
      const response = await fetch(
        "https://rohaniyatweb-production-99fc.up.railway.app/api/rohani_ilaj_form",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        showAnimatedModal("Form submitted successfully!");
        setFormData({
          patientName: "",
          fatherName: "",
          motherName: "",
          country: "",
          cityName: "",
          whatsappNumber: "",
          email: "",
          disease: "",
        });
      } else {
        showAnimatedModal(data.error || "Submission failed.");
      }
    } catch (error) {
      console.error(error);
      showAnimatedModal("Something went wrong.");
    }
  };

  const onDateChange = (event, date) => {
    if (date) {
      const formattedDate = date.toISOString().split("T")[0];
      handleChange("dateOfBirth", formattedDate);
      setSelectedDate(date);
    }
    setShowDatePicker(false);
  };

  return (
    <CustomBackground>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <Text style={styles.heading}>روحانی علاج کے لیے</Text>
          <Text style={styles.description}>
            الحمد للہ اس سروس کے ذریعے ہزاروں لوگ ہمارے سلسلے میں داخل ہو رہے
            ہیں ان کو ای میل یا واٹس اپ کے ذریعے سلسلے کے تمام وظائف و اذکار
            بھیج دئے جاتے ہیں اور وقتا فوقتا ان کی رہنمائی بھی کی جاتی ہے یاد
            رہے تصوف اور عملیات دونوں علیحدہ علیحدہ شعبے ہیں
          </Text>

          {Object.keys(formData).map((key) => {
            if (key === "dateOfBirth") {
              return (
                <View key={key} style={{ width: "100%", marginBottom: 12 }}>
                  <TouchableOpacity
                    onPress={() => setShowDatePicker(true)}
                    style={styles.input}
                  >
                    <Text style={{ color: formData[key] ? "#000" : "#999" }}>
                      {formData[key] || "Date Of Birth"}
                    </Text>
                  </TouchableOpacity>
                  {errors[key] && (
                    <Text style={styles.error}>{errors[key]}</Text>
                  )}
                  {showDatePicker && (
                    <DateTimePicker
                      value={selectedDate}
                      mode="date"
                      display="default"
                      onChange={onDateChange}
                      maximumDate={new Date()}
                    />
                  )}
                </View>
              );
            }

            return (
              <View key={key} style={{ width: "100%", marginBottom: 12 }}>
                <TextInput
                  style={styles.input}
                  placeholder={formatKey(key)}
                  value={formData[key]}
                  onChangeText={(text) => handleChange(key, text)}
                  keyboardType={
                    key === "email"
                      ? "email-address"
                      : ["age", "whatsappNumber"].includes(key)
                      ? "numeric"
                      : "default"
                  }
                />
                {errors[key] && <Text style={styles.error}>{errors[key]}</Text>}
              </View>
            );
          })}

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>📩 Submit</Text>
          </TouchableOpacity>

          <Modal transparent visible={showModal} animationType="none">
            <Animated.View
              style={[
                styles.modal,
                {
                  transform: [{ translateY: slideAnim }],
                },
              ]}
            >
              <Text style={styles.modalText}>{modalMsg}</Text>
            </Animated.View>
          </Modal>
        </ScrollView>
      </TouchableWithoutFeedback>
    </CustomBackground>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#6C472D",
    textAlign: "center",
    marginBottom: 10,
    writingDirection: "rtl",
  },

  description: {
    fontSize: 18,
    color: "#6C472D",
    lineHeight: 30,
    textAlign: "right",
    writingDirection: "rtl",
    marginBottom: 10,
  },

  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#6D4C41",
    color: "#6D4C41",
    borderRadius: 10,
    backgroundColor: "#EFEADF",
    fontSize: 16,
    borderWidth: 2,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
  button: {
    backgroundColor: "#6D4C41",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    width: "100%",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: 40,
    right: 40,
    padding: 20,
    backgroundColor: "#6D4C41",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
    alignItems: "center",
  },
  modalText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 15,
    borderRadius: 10,
  },
});
