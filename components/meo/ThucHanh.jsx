import React from "react";
import { Text, StyleSheet, View, ScrollView, Image } from "react-native";
import Record from "./Record";

const ThucHanh = () => {
  return (
    <ScrollView>
      <Record title={"Lưu ý khi thi thực hành lái xe máy"}>
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>
              1. Tránh gặp phải những lỗi loại trực tiếp
            </Text>
            <View>
              <Text style={styles.para}>
                Khi thi sa hình A1, trong trường hợp bạn không thể tự tin về khả
                năng lái xe thì hãy cố gắng chỉ bị trừ điểm chứ không loại trực
                tiếp. Một số lỗi khiến bạn “thi trượt” ngay lập tức gồm:
              </Text>
              <Text style={styles.para}>
                + Lỗi đi ngược vòng số 8 hoặc ra khỏi vòng số 8 quá sớm.
              </Text>
              <Text style={styles.para}>
                + 2 bánh xe chệch ra hoàn toàn khỏi vòng số 8.
              </Text>
              <Text style={styles.para}>+ Ngã xe, đổ xe, chết máy.</Text>
              <Text style={styles.title}>
                2. Hạn chế mắc những lỗi phổ biến
              </Text>
              <Text style={styles.para}>
                Dưới đây là những lỗi mà học viên thường mắc phải khi tham dự
                bài thi thực hành lái xe A1
              </Text>
              <Text style={styles.para}>
                + Đè vạch 2 lần ngay khi mới xuất phát. Nguyên nhân do vạch xuất
                phát khá dài, bạn đặt xe không đúng vị trí thích hợp (vị trí
                thích hợp là vị trí X như trên ảnh). Khi vào vòng số 8 sẽ đè
                vạch trong, đánh lái 1 lần nữa sẽ đè vạch ngoài. Chạm vạch 2 lần
                trừ 10 điểm.
              </Text>
              <Text style={styles.para}>
                + Chống chân khi đi vòng số 8. Lỗi này các bạn mắc nhiều vô kể.
                Chủ yếu do đi quá chậm, mà đi chậm lại do không thuộc bài, không
                nhớ bài, giảm ga xem để nhớ xem đi tiếp như thế nào và rồi chống
                chân, trừ tiếp 5 điểm.
              </Text>
              <Text style={styles.para}>
                + Bài thi đường gồ ghề, do các gờ giảm tốc vừa cao, vừa nằm sát
                nhau. Nếu không chắc tay lái, hoặc đi quá nhanh sẽ gây mất thăng
                bằng, rồi lại phải chống chân hoặc thậm chí ngã xe.
              </Text>
              <Text style={styles.title}>
                3. Chuẩn bị trước khi thi thực hành
              </Text>
              <Text style={styles.para}>
                Bạn cần làm những công việc sau trước khi thi thực hành lái xe
                máy A1
              </Text>
              <Text style={styles.para}>
                + Đội mũ bảo hiểm và cài quai đúng qui cách. Lưu ý: không đeo
                khẩu trang khi dự thi vì các thiết bị máy quét và chụp ảnh vẫn
                đang hoạt động.
              </Text>
              <Text style={styles.para}>
                + Nghe loa hướng dẫn để chọn đúng xe thi sát hạch. Ví dụ: thí
                sinh Nguyễn Văn A lên xe sát hạch số 01. Bạn phải tìm đúng xe số
                01 và chuẩn bị dự thi.
              </Text>
              <Text style={styles.para}>
                + Đưa xe vào vạch xuất phát, thoải mái tâm lý để có 1 phần thi
                đạt điểm số cao.
              </Text>
              <Image
                style={styles.image}
                //image={require("../bien-bao/meoThucHanh.png")}
              />
              <Text style={styles.title}>4. Cách đi vòng số 8</Text>
              <Text style={styles.para}>
                Khi xuất phát, tiến dần vào cửa vòng số 8, ở giai đoạn này bạn
                nên để xe ở số 2 hoặc số 3. Đối với các bạn nam, tay lái vững
                vàng hơn một chút nên điều khiển ở số 2, còn đối với các bạn nữ,
                tối ưu nhất là đi xe máy số 3. Điều này để đảm bảo tốc độ ổn
                định, tránh xe quá yếu và mắc sai lầm ngay khi xuất phát.
              </Text>
              <Text style={styles.para}>
                Khi đã cho xe tiến vào, bạn tiếp tục chạy theo theo chiều mũi
                tên trên đường. Ở phần thi này, tốt nhất nên để số 3 để ổn định
                máy. Nếu bạn nào khi tiến vào mà mà đang dùng số 2 thì từ từ lên
                ngay số 3.
              </Text>
              <Text style={styles.para}>
                Một số lưu ý khi thi thực hành lái xe A1 vòng số 8 như sau:
              </Text>
              <Text style={styles.para}>
                + Phần thi này là chạy đủ số lượng 1,5 vòng, do đó đừng vội vàng
                ra khi thấy hướng mũi tên.
              </Text>
              <Text style={styles.para}>
                + Điều khiển bánh trước chạy phía trong vòng số 8, áp sát mép
                ngoài.
              </Text>
              <Text style={styles.para}>
                + Khi ôm cua hãy giữ vững tay lái để tránh loạng choạng hay lắc
                lư tay lái. Đặc biệt tránh đi số 4 bởi với đường cua đi chậm mà
                ga quá yếu thì xe sẽ đột ngột tắt máy.
              </Text>
              <Text style={styles.title}>
                5. Kinh nghiệm cho phần thi đường thẳng
              </Text>
              <Text style={styles.para}>
                + Khi ôm cua hãy giữ vững tay lái để tránh loạng choạng hay lắc
                lư tay lái. Đặc biệt tránh đi số 4 bởi với đường cua đi chậm mà
                ga quá yếu thì xe sẽ đột ngột tắt máy.
              </Text>
              <Text style={styles.para}>
                Đây là phần thi thực hành lái xe A1 dễ nhất, học viên chỉ cần ga
                đều tay, ngồi đúng tư thế và ổn định tốc độ. Lưu ý không chạm
                vạch hoặc chống chân. Phần thi này khá ngắn do đó đừng đi quá
                nhanh bởi khi hãm lại khiến xe có thể bị mất thăng bằng. Tốt
                nhất hãy giữ tốc độ ổn định khoảng 30-40km.
              </Text>
              <Text style={styles.title}>
                6. Kinh nghiệm cho phần thi đường ziczac
              </Text>
              <Text style={styles.para}>
                Ở phần chạy thực hành A1 này, quan trọng nhất là đi chậm và
                thăng bằng tốt. Hãy đi theo đúng chiều mũi tên, tránh các vật
                cản trắng. Gợi ý tốt nhất cho bạn là nên duy trì tốc độ khoảng
                dưới 20km/h. Nếu đi nhanh bạn sẽ đè vào những vạch trắng, mỗi
                lần đè vạch trừ 5 điểm, mà có tới 5 vạch nhé các bạn.
              </Text>
              <Text style={styles.title}>
                7. Kinh nghiệm cho phần thi đường gồ ghề
              </Text>
              <Text style={styles.para}>
                Đây là bài cuối cùng cho phần thực hành A1. Phần đường mấp mô
                thực chất không khó nhưng nếu không có kỹ năng bạn có thể bị trừ
                điểm nghiêm trọng tại phần này. Điều duy nhất bạn cần lưu ý đó
                là: “giữ vững tay lái” chỉ cần thế là bạn đã có thể vượt qua
                phần thi này rồi.
              </Text>
            </View>
          </View>
        </View>
      </Record>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
  content: {
    backgroundColor: "#fff",
    paddingTop: 5,
    paddingBottom: 5,
  },
  title: {
    fontWeight: "600",
    paddingLeft: 15,
    marginBottom: 3,
    marginTop: 5,
  },
  para: {
    fontSize: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  image: {},
});

export default ThucHanh;
