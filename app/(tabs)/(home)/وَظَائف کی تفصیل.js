import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import HTMLView from "react-native-htmlview";
import CustomBackground from "../../../components/Background/Background";
const openLink = (url) => {
  Linking.openURL(url).catch((err) =>
    console.error("Failed to open URL:", err)
  );
};
export default function Wazaifkitafseel() {
  const route = useRoute();
  const { id } = route.params;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(
          `https://rohaniyatweb-production-99fc.up.railway.app/api/card-data/get-table-data?tableName=wazaif&id=${id}`
        );
        const result = await response.json();
        setData(result.rows[0]);
      } catch (error) {
        console.error("Error fetching details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [id]);
  return (
    <CustomBackground>
      {loading ? (
        <View style={styles.centerContent}>
          <ActivityIndicator size="large" color="#6C472D" />
        </View>
      ) : (
        <ScrollView>
          <Text style={styles.heading}>
            {data ? data.title : "No Data Found"}
          </Text>

          {data?.image ? (
            <Image
              source={{ uri: data.image }}
              style={styles.image}
              resizeMode="contain"
            />
          ) : (
            <Image
              source={require("../../../assets/images/content-image.jpg")}
              style={styles.image}
              resizeMode="contain"
            />
          )}
          <HTMLView
            value={data?.content || "No Data Found"}
            stylesheet={htmlStyles}
          />
          <View style={styles.youtubeSection}>
            {/* Idara Rohaniyat Image - Top */}
            <Image
              source={require("../../../assets/images/Line.png")}
              style={styles.rohaniyatImage}
              resizeMode="contain"
            />

            {/* YouTube Link Row */}
            <View style={styles.youtubeRow}>
              <TouchableOpacity
                onPress={() =>
                  openLink("https://www.youtube.com/@IdaraRohaniyat")
                }
              >
                <Image
                  source={require("../../../assets/images/youtube.png")}
                  style={styles.youtubeIcon}
                />
              </TouchableOpacity>
              <Text style={styles.youtubeText}>
                مزید تفصیلات کے لیے یوٹیوب لنک وزٹ کریں۔
              </Text>
            </View>

            {/* Idara Rohaniyat Image - Bottom */}
            <Image
              source={require("../../../assets/images/Line.png")}
              style={styles.rohaniyatImage}
              resizeMode="contain"
            />
          </View>
        </ScrollView>
      )}
    </CustomBackground>
  );
}
const styles = StyleSheet.create({
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 35,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  image: {
    marginTop: 10,
    width: "100%",
    height: 300,
  },
  youtubeSection: {
    marginTop: 10,
  },
  rohaniyatImage: {
    width: "100%",
    height: 20,
  },
  youtubeRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", 
    paddingHorizontal: 40,
    gap: 12,  
  },
  youtubeIcon: {
    width: 28,
    height: 26,
    marginLeft: 12,
  },
  youtubeText: {
    fontSize: 20,
    fontFamily: "Jameel-Noori-Regular",
    color: "red",
    textAlign: "right",
    writingDirection: "rtl",
  },
});

// HTML Styles
const htmlStyles = StyleSheet.create({
  h1: {
    fontFamily: "Arial",
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
    writingDirection: "rtl",
    textAlign: "right",
  },
  h2: {
    fontFamily: "Arial",
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    writingDirection: "rtl",
    textAlign: "right",
  },
  h3: {
    fontFamily: "Arial",
    fontSize: 20,
    fontWeight: "bold",
    color: "#444",
    writingDirection: "rtl",
    textAlign: "right",
  },
  p: {
    marginTop: 10,
    fontSize: 20,
    color: "#6C472D",
    fontFamily: "Jameel-Noori-Regular",
    lineHeight: 30,
    textAlign: "right",
    writingDirection: "rtl",
  },
  span: {
    fontSize: 20,
    color: "#6C472D",
    lineHeight: 30,
    textAlign: "right",
    writingDirection: "rtl",
  },
  ul: {
    fontSize: 20,
    color: "#6C472D",
    lineHeight: 30,
    textAlign: "right",
    writingDirection: "rtl",
  },
  ol: {
    fontSize: 20,
    color: "#6C472D",
    lineHeight: 30,
    textAlign: "right",
    writingDirection: "rtl",
  },
  li: {
    fontSize: 20,
    color: "#6C472D",
    lineHeight: 30,
    textAlign: "right",
    writingDirection: "rtl",
  },
  strong: {
    fontWeight: "bold",
    color: "red",
  },
  em: {
    fontStyle: "italic",
  },
});
