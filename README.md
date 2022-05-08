# Ứng dụng: Ôn thi bằng lái xe máy

>Nhóm 11

| Họ và tên | MSSV  |
|---|---|
| Cao Nguyễn Hùng | 19020035 |
| Trương Gia Huy | 19021301 |
| Nguyễn Văn Hùng | 19021290 |

## Công nghệ sử dụng:
- React Native

## Cách chạy:
Đầu tiên máy bạn phải cài đặt NodeJS bản LTS

1. Install dependencies

  ```sh
  $ npm install
  ```

2. Run with Expo client

  ```sh
  $ npm start
  ```

### Cách pull backend

1. Cài đặt AWS Amplify
 ```sh
  $ npm install aws-amplify
  ```
2. Đăng nhập vào bảng điều khiển AWS bằng cách copy đường link ở phần console login link.
Sau đó sử dụng tài khoản, mật khẩu được cung cấp trong file để đăng nhập.
3. Sau khi đăng nhập thành công, vào thanh tìm kiếm, tìm kiếm Amplify (chú ý region ở goc phải màn hình chỉnh về "US West (Oregon)
us-west-2")
4. Chọn MobileProject (nhớ là đổi region bởi ở region mặc định có 1 cái là mobileProject để test thôi vào không còn sử dụng đc)
5. Chọn Backend environments, kéo xuống chọn Edit backend.
6. Coppy đường link để pull back end về, sau đó paste vào cmd nơi chứa front end.
