1. SSR (Server side rendering): thường được sử dụng trong website có yếu tố sale -> trả về thẳng HTML/CSS rendering
     UD: tốt cho sale; request nhanh hơn; lượt truy cập đầu tiên sẽ nhanh.
     ND: phải thực hiện request lại từ đầu khi thực hiện thao tác mới.
     với tác vụ ngắn hạn có thể nhanh hơn
2. CSR  (Client side rendering): trả về file "main" trống 
     UD: tải nhanh.
     ND: kho sale trả về nội dung.
     với tác vụ dài hạn có thể nhanh hơn
