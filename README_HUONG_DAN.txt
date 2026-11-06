XSMB Predictor PWA – BẢN CHẠY KHÔNG CẦN KÝ IPA

1. Tạo repository GitHub PUBLIC mới (ví dụ: xsmb-pwa) hoặc dùng repository public trống.
2. Upload tất cả NỘI DUNG trong thư mục này lên nhánh main, tại thư mục gốc (index.html, sw.js, manifest.webmanifest, thư mục assets và icons, file .nojekyll).
3. Vào Settings > Pages > Build and deployment > Deploy from a branch > main / (root) > Save.
4. Trang web sẽ có dạng https://TEN_USER.github.io/TEN_REPO/ . Kiểm tra site mở được trong Safari iPhone.
5. Safari iPhone: Chia sẻ > Thêm vào Màn hình chính > bật Open as Web App (nếu có) > Thêm.
6. MỞ ỨNG DỤNG LẦN ĐẦU KHI CÓ MẠNG; đợi tải xong. Sau đó tắt mạng và mở lại để kiểm tra chế độ offline.
7. Ở tab "Sổ Kết Quả & Nhập Liệu", dùng "Xuất bản sao JSON" để sao lưu và "Khôi phục bản sao" khi cần.

LƯU Ý:
- Tool không tự cập nhật kết quả xổ số. Dữ liệu mới do người dùng nhập hoặc dán từ nguồn riêng.
- Dữ liệu lưu cục bộ bằng localStorage; có thể mất khi xóa dữ liệu Safari / xóa web app / một số tình huống iOS dọn dẹp bộ nhớ. Hãy xuất bản sao định kỳ.
- Không thay đổi tên repository/đường dẫn sau khi đã lưu dữ liệu nếu không sao lưu trước: localStorage được phân tách theo origin.
- PWA chạy offline sau lần tải đầu tiên và cài service worker thành công; các liên kết ra trang web ngoài vẫn cần mạng.
- Được giữ nguyên thuật toán & dữ liệu mặc định từ file 4cang.html gốc; đây là phân tích thống kê, không bảo đảm dự đoán chính xác.
