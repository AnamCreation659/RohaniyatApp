import { ScrollView, StyleSheet, Text, View } from "react-native";
import CustomBackground from "../../components/Background/Background";
import { mainStyles } from "../../style/globalcss";
export default function RohaniIlajScreen() {
  return (
    <CustomBackground>
      <ScrollView>
        <View>
          <Text style={mainStyles.tashkhesHeading}>
            مدرسہ تعلیم القرآن کا مختصر تعارف
          </Text>
          <Text style={mainStyles.description}>
            مدرسہ تعلیم القرآن علاقہ کا ایک مثالی مدرسہ ہے ۔علاقے میں بچوں کی
            صحیح قرآنی تعلیم و تربیت موجودہ دور کی ایک اہم ضرورت ہے۔ اسکولوں
            میں بچوں کو صرف سیکولر تعلیم دی جاتی ہے ، جس کی بنا پر ان کی دینی
            تعلیم کا کوئی معقول نظم نہیں ہوپاتا ، اس کی تلافی یوں ہوسکتی ہے کہ
            ہر مسجد میں مکتب قائم کیا جائے ، محلّے کے بچوں کو اس سے جوڑا جائے ،
            ان کی دینی تعلیم ناظرۂ قرآن و تجوید ، ابتدائی دینیات ، طہارت ، وضو
            ، نماز وغیرہ کا طریقہ وغیرہ سکھانے کا نظم کیا جائے ، اس کا ایک تجربہ
            پیر طریقت رہبر شریعت ، حضرت حافظ و قاری محمد عثمان چشتی صاحب کے زیر
            سایہ چلنے والامدرسہ تعلیم القرآن کے نام سے ہورہا ہے ۔
          </Text>

          <Text style={mainStyles.description}>
            یہ مدرسہ الحمدللہ گزشتہ کئی برسوں سے جاری ہے ، اب تک 100 سے زائد
            طلبہ و طالبات ناظرہ قرآن پاک پڑھنے کے بعدیہاں سے فارغ ہوچکے ہیں ،
            مزید الحمدللہ تقریبا 100 طلبہ و طالبات ناظرہ قرآن پاک کی تعلیم حاصل
            کر رہے ہیں ،اسلامی تعلیم کیلئے ابھی دو گھنٹے کی خدمات انجام دے رہے
            ہیں (مغرب سے عشاء تک) کا وقت متعین کیا گیا ہے ،مدرسے میں قاعدہ
            ،ناظرہ قرآن کریم ، بنیادی دینی مسائل ،روزمرہ کے آداب ،نعت شریف
            سمیت بچوں میں تخلیقی صلاحیتوں کو نکھارنے کا کام کیا جاتا ہے۔
          </Text>
          <Text style={mainStyles.description}>
            مستقبل قریب میں پانچ درجات میں کام کرنے کیلئے کوشاں ہیں :
          </Text>
          <View>
            <Text style={mainStyles.item}>
              • طلبہ و طالبات کیلئے حفظ القرآن کی پُر سکون کلاسز کا اہتمام کرنا
              ہے۔
            </Text>
            <Text style={mainStyles.item}>
              • طلبہ و طالبات کیلئے درس نظامی کی کلاسز کا اہتمام کرنا ہے۔
            </Text>
            <Text style={mainStyles.item}>
              • محلے، علاقے کے بچوں، بچیوں اور خواتین کیلئے تربیتی کورسز کا
              اہتمام کرنا ہے۔
            </Text>
            <Text style={mainStyles.item}>
              • بچوں، بچیوں اور علاقے کی خواتین کے لیے دستکاری سکول۔
            </Text>
            <Text style={mainStyles.item}>
              • جدید علوم سے آراستہ کرنا اور معاشرے میں بے روزگاری کو ختم کرنے
              کے لیے توسیع کا منصوبہ ہے۔
            </Text>
          </View>

          <Text style={mainStyles.description}>
            احباب سے دعا اور تعاون کی گذارش ہے ،ادارے کا اس وقت ماہانہ کل خرچ
            تقریبا 1 لاکھ روپے ہے۔ ادارے میں بچوں سے کوئی فیس نہیں لی جاتی ۔
            ضرورت ہے کہ پورے ملک میں اس طرح کے مکاتب کا جال بچھادیا جائے _ ہر
            محلّے کی مسجد میں مکتب ہو ، جس میں محلے کا ہر بچہ عمدہ دینی تعلیم
            حاصل کر سکے۔
          </Text>
        </View>
      </ScrollView>
    </CustomBackground>
  );
}
