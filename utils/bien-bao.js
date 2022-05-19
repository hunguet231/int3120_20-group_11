// Biển báo cấm
export const labelsType1 = [
  {
    title: "Cấm máy kéo",
    content:
      "Để báo đường cấm tất cả các loại máy kéo, kể cả máy kéo bánh hơi và bánh xích đi qua.",
    image: require("../assets/bien-bao/bien-bao-cam/Cam1.png"),
  },
  {
    title: "Cự ly tối thiểu giữa hai xe",
    content:
      "Để báo xe ô tô phải đi cách nhau một khoảng tối thiểu. Số ghi trên biển cho biết khoảng cách tối thiếu tính bằng mét. Biển có hiệu lực cấm các xe ô tô không được đi cách nhau kể cả các xe ưu tiên theo luật lệ nhà nước quy định một cự ly nhỏ hơn trị số ghi trên biển báo.",
    image: require("../assets/bien-bao/bien-bao-cam/Cam2.png"),
  },
  {
    title: "Cấm xe người kéo, đẩy",
    content:
      "Để báo đường cấm xe người kéo, đẩy đi qua. Biển không có giá trị cấm những xe nôi của trẻ em và phương tiện chuyên dụng để đi lại của người tàn tật.",
    image: require("../assets/bien-bao/bien-bao-cam/Cam3.png"),
  },
  {
    title: "Cấm ô tô khách và ô tô tải",
    content:
      "Để báo đường cấm ô tô chở khách và các loại ô tô tải có trọng lượng lớn nhất cho phép trên 3,5 tấn kể cả các loại máy kéo xà xe máy thi công chuyên dụng đi qua trừ các xe được ưu tiên theo luật lệ nhà nước quy định.",
    image: require("../assets/bien-bao/bien-bao-cam/Cam4.png"),
  },
  {
    title: "Hạn chế chiều dài ô tô",
    content:
      "Biển báo cấm các loại xe (cơ giới và thô sơ) kể cả xe ưu tiên theo quy định, có độ dài kể cả xe và hàng hoá lớn hơn trị số quy định trên biển.",
    image: require("../assets/bien-bao/bien-bao-cam/Cam5.png"),
  },
  {
    title: "Cấm ô tô rẽ trái",
    content:
      "Biển báo cấm các loại xe cơ giới (kể cả xe 3 bánh) rẽ trái, trừ xe mô tô 2 bánh, xe gắn máy và xe được ưu tiên theo quy định.",
    image: require("../assets/bien-bao/bien-bao-cam/Cam6.png"),
  },
  {
    title: "Đường cấm",
    content:
      "Biển báo cấm tất cả các loại phương tiện (xe cơ giới và xe thô sơ) di chuyển cả hai hướng, trừ các xe được ưu tiên theo quy định (xe chữa cháy, xe cứu thương, xe hộ đê, đoàn xe tang,...).",
    image: require("../assets/bien-bao/bien-bao-cam/Cam7.png"),
  },
  {
    title: "Cấm đi ngược chiều",
    content:
      "Biển báo cấm tất cả các loại xe (xe cơ giới và xe thô sơ) đi vào theo chiều đặt biển, trừ các xe được ưu tiên theo quy định; người đi bộ được phép đi trên vỉa hè hoặc lề đường.",
    image: require("../assets/bien-bao/bien-bao-cam/Cam8.png"),
  },
  {
    title: "Cấm xe ô tô ",
    content:
      "Biển báo cấm tất cả các loại xe cơ giới (kể cả mô tô 3 bánh), trừ xe mô tô 2 bánh, xe gắn máy và các xe được ưu tiên theo quy định.",
    image: require("../assets/bien-bao/bien-bao-cam/Cam9.png"),
  },
  {
    title: "Cấm ô tô rẽ phải",
    content:
      "Biển báo cấm các loại xe cơ giới (kể cả xe 3 bánh) rẽ phải, trừ xe mô tô 2 bánh, xe gắn máy và xe được ưu tiên theo quy định.",
    image: require("../assets/bien-bao/bien-bao-cam/Cam10.png"),
  },
];

// Biển báo hiệu lệnh
export const labelsType2 = [
  {
    title: "Hướng đi phải theo",
    content:
      "Các xe chỉ được đi thẳng (trừ xe được quyền ưu tiên theo quy định).",
    image: require("../assets/bien-bao/bien-bao-hieu-lenh/hl1.png"),
  },
  {
    title: "Hướng đi phải theo",
    content:
      "Các xe chỉ được rẽ phải (trừ xe được quyền ưu tiên theo quy định). Biển này được đặt ở sau  nơi đường giao nhau.",
    image: require("../assets/bien-bao/bien-bao-hieu-lenh/hl2.png"),
  },
  {
    title: "Hướng đi phải theo",
    content:
      "Các xe chỉ được rẽ trái (trừ xe được quyền ưu tiên theo quy định). Biển này được đặt ở sau nơi đường giao nhau.",
    image: require("../assets/bien-bao/bien-bao-hieu-lenh/hl3.png"),
  },
  {
    title: "Nơi giao nhau chạy theo vòng xuyến",
    content:
      "Báo cho các loại xe (thô sơ và cơ giới) phải chạy vòng theo đảo an toàn ở nơi đường giao nhau.",
    image: require("../assets/bien-bao/bien-bao-hieu-lenh/hl4.png"),
  },
  {
    title: "Đường dành cho xe thô  sơ",
    content:
      "Báo đường dành cho xe thô sơ (kể cả xe của người tàn tật) và người đi bộ. Biển bắt buộc các  loại xe thô sơ (kể cả xe của người tàn tật) và người đi bộ phải dùng đường dành riêng này để đi và cấm các xe cơ giới kể cả xe gắn máy, các xe được ưu tiên theo quy định đi vào đường đã đặt biển này.",
    image: require("../assets/bien-bao/bien-bao-hieu-lenh/hl5.png"),
  },
  {
    title: "Đường dành cho người đi bộ",
    content:
      "Báo đường dành cho người đi bộ. Các loại xe cơ giới và thô sơ kể cả các xe được ưu tiên theo quy định không được phép đi vào đường đã đặt biển này, trừ trường hợp đi cắt ngang qua nhưng phải đảm bảo tuyệt đối an toàn cho người đi bộ. ",
    image: require("../assets/bien-bao/bien-bao-hieu-lenh/hl6.png"),
  },
  {
    title: "Tốc độ tối thiểu cho phép",
    content:
      "Báo tốc độ tối thiểu cho phép các xe cơ giới chạy. Biển cấm các loại xe cơ giới chạy với tốc độ nhỏ hơn trị số ghi trên biển.",
    image: require("../assets/bien-bao/bien-bao-hieu-lenh/hl7.png"),
  },
  {
    title: "Ấn còi",
    content: "Biểu thị xe cộ đi đến vị trí cắm biển đó thì phải ấn còi.",
    image: require("../assets/bien-bao/bien-bao-hieu-lenh/hl8.png"),
  },
  {
    title: "Hướng phải đi vòng chướng ngại vật",
    content:
      "Các các loại xe (cơ giới và thô sơ) hướng đi vòng sang phải để qua một chướng ngại vật ",
    image: require("../assets/bien-bao/bien-bao-hieu-lenh/hl9.png"),
  },
  {
    title: "Hướng phải đi vòng chướng ngại vật",
    content:
      "Các các loại xe (cơ giới và thô sơ) hướng đi vòng sang trái để qua một chướng ngại vật ",
    image: require("../assets/bien-bao/bien-bao-hieu-lenh/hl10.png"),
  },
];

// Biển báo nguy hiểm
export const labelsType3 = [
  {
    title: "Chỗ ngoặt nguy hiểm vòng bên trái",
    content: "Báo trước sắp đến một chỗ ngoặt nguy hiểm phía bên trái.",
    image: require("../assets/bien-bao/bien-bao-nguy-hiem/nh1.png"),
  },
  {
    title: "Chỗ ngoặt nguy hiểm vòng bên phải",
    content: "Báo trước sắp đến một chỗ ngoặt nguy hiểm phía bên phải.",
    image: require("../assets/bien-bao/bien-bao-nguy-hiem/nh2.png"),
  },
  {
    title: "Giao nhau với đường không ưu tiên",
    content: "Báo trước sắp đến nơi giao nhau với đường không ưu tiên.",
    image: require("../assets/bien-bao/bien-bao-nguy-hiem/nh3.png"),
  },
  {
    title: "Giao nhau có tín hiệu đèn",
    content:
      "Báo trước nơi giao nhau có điều khiển giao thông bằng tín hiệu đèn trong trường hợp người lái xe khó quan sát để kịp thời xử lý.",
    image: require("../assets/bien-bao/bien-bao-nguy-hiem/nh4.png"),
  },
  {
    title: "Nhiều chỗ ngoặt nguy hiểm liên tiếp",
    content:
      "báo trước sắp đến nhiều chỗ ngoặt nguy hiểm liên tiếp trong đó chỗ ngoặt đầu tiên hướng vòng bên trái.",
    image: require("../assets/bien-bao/bien-bao-nguy-hiem/nh5.png"),
  },
  {
    title: "Đường bị hẹp cả hai bên",
    content: "báo trước sắp đến một đoạn đường bị hẹp đột ngột cả hai bên.",
    image: require("../assets/bien-bao/bien-bao-nguy-hiem/nh6.png"),
  },
  {
    title: "Đường bị hẹp về phía trái",
    content: "báo trước sắp đến một đoạn đường bị hẹp đột ngột phía bên trái.",
    image: require("../assets/bien-bao/bien-bao-nguy-hiem/nh7.png"),
  },
  {
    title: "Đường hai chiều",
    content:
      "báo trước sắp đến đoạn đường do sửa chữa hoặc có trở ngại ở một phía đường mà phải tổ chức đi lại cho phương tiện cả hai chiều trên phía đường còn lại hoặc để báo trước đoạn đường đôi tạm thời hoặc đoạn đường có chiều xe đi và về đi chung.",
    image: require("../assets/bien-bao/bien-bao-nguy-hiem/nh8.png"),
  },
  {
    title: "Đường giao nhau cùng cấp",
    content:
      "báo trước sắp đến nơi giao nhau cùng mức của các tuyến đường cùng cấp (không có đường nào ưu tiên) trên cùng một mặt bằng.",
    image: require("../assets/bien-bao/bien-bao-nguy-hiem/nh9.png"),
  },
  {
    title: "Đường giao nhau cùng cấp",
    content:
      "báo trước sắp đến nơi giao nhau cùng mức của các tuyến đường cùng cấp (không có đường nào ưu tiên) trên cùng một mặt bằng",
    image: require("../assets/bien-bao/bien-bao-nguy-hiem/nh10.png"),
  },
];
