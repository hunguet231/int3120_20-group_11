# Ứng dụng: Ôn thi bằng lái xe máy

> Nhóm 11

| Họ và tên       | MSSV     |
| --------------- | -------- |
| Cao Nguyễn Hùng | 19020035 |
| Trương Gia Huy  | 19021301 |
| Nguyễn Văn Hùng | 19021290 |

## Công nghệ sử dụng:

- React Native (Expo)
- Amazon Web Services

## Môi trường:

- Node.js LTS
- Visual Studio Code
- Expo App (optional)

## Cách chạy:

1. Install dependencies

```sh
$ npm install
```

2. Run project

```sh
$ npm start
```

### Cách pull backend

1. Đăng nhập vào bảng điều khiển AWS bằng cách copy đường link ở phần console login link, sau đó sử dụng tài khoản, mật khẩu được cung cấp trong file csv để đăng nhập.
2. Chỉnh region về "US West (Oregon) us-west-2".
3. Sau khi đăng nhập thành công, vào thanh tìm kiếm, tìm kiếm Amplify.
4. Chọn MobileProject
5. Chọn Backend environments, kéo xuống chọn Edit backend.
6. Copy đường link để pull back end về, sau đó paste vào terminal nơi chứa thư mục gốc project và thực hiện pull backend.
