# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# XÂY DỰNG THƯ VIỆN UI CHO REACTJS TỪ CON SỐ "0" `PHẦN 1`

> NHỮNG LÝ THUYẾT VÀ CÁC ĐỊNH NGHĨA DƯỚI ĐÂY CHỈ PHÙ HỢP VỚI WEBSITE.

## 1. Lý do cho sự tồn tại của bài blog này

Trong quá trình thực hiện các bài phỏng vấn, mà mình hoàn thành tốt. Mình luôn tìm kiếm những thứ kiến thức giúp mình trở nết xuất sắc hơn.. Mình thường đặt câu hỏi thêm hỏi cho nhà tuyển dụng rằng `Liệu có thứ gì em cần lưu tâm ngoài những thứ em và anh vừa trao đổi trong cuộc phỏng vấn vừa rồi không ạ ?` thì câu trả lời nhìn thấy xuát hiện `nhiều nhất` đó là `Em nên thử tìm hiểu về cách xây dựng một thư viện UI cho công ty`.

Đó là câu trả lời đã thôi thúc mình thực hiện một bản demo mà chắc chắn trong tương lai mình sẽ được sử dụng. Cũng như để khép lại một năm đầu tiên mình bước chân vào nghề lập trình này.

## 2. Thư viện UI là gì? Tại sao lại cần phải tự xây dựng một thư viện UI riêng?

### 2.1. Thư viện UI là gì?

Thư viện UI là tập hơp các thành phần hay còn gọi là các `Component` được xây dựng có sẵn từ trước và được `tái sử dụng` trong quá trình phát triển giao diện cho một website.

> Hình ảnh thực tế của các `Component`

### 2.2. Tại sao cần phải xây dựng thư viện UI

Lợi ích có được tự xây dựng thư viên UI mang lại là vô cùng hấp dẫn và nó lại càng khó từ chối khi bản thân sản phẩm mà bạn đang làm việc để xây dựng nên nó là một sản phẩm `Product`. Các lợi ích cụ thể như sau:

<ul>
  <li>Dung lượng File giảm có thể lên tới <strong>9 lần.</strong> so với sử dụng các thư viện có sẵn mà khi sử dụng thì thường phải mất thời gian sử đổi lại cho phù hợp với ngôn ngũ thiết kế của dự án</li>
  <li>Có thể các nhân hóa một cách tuyệt đối cho phù hợp với đội ngũ phát triển.</li>
  <li>Toàn quyền quản lý source code của thư viện.</li>
  <li>Tình đồng bộ hóa về ngôn ngữ thiết kế Component</li>
</ul>

Đổi lại những thứ như trên đổi lại chúng ta cũng phải trả một cái giá tương ứng như dưới đây:

<ul>
  <li>Mức độ thành công của thư viện phụ thuộc cực kỳ nhiều vào cách triển khai xây dưng thử viện hay cụ thể hơn là <strong>Kiến trúc</strong> của bản thân thư viên đó.</li>
  <li>Giai đoạn phát triển ban đầu tương đối mất thời gian</li>
</ul>

Từ đây, để tìm ra một hướng đi đúng đắn nhất cho việc phát triển thư viện đó là `Học từ những người đúng đầu biến cái hay của người ta thành của mình`.

## 2.2. CÁC THƯ VIỆN UI PHỔ BIẾN NHẤT.

Ứng cử viên sáng giá nhất cho việc học hỏi đường lối phát triển cũng như là về mức độ hài lòng từ các lập trình ( trong đó có cả mình ) chính là `Material UI`.

Ra đời từ năm 2014 và được sử dụng cực kỳ phổ biến trong các Công ty, Start-ups kỳ lân trên thế giới như `Airbnb`, `Spotify`, `Netflix`, `Coursera`...

Ngoài ra còn có các thư viện đang đi lên rất nhanh khác nhưng cũng sử dụng đường lối phát triển tương tự là `Charka UI`.

## 2.3. ƯU NHƯỢC ĐIỂM CỦA THƯ VIỆN MATERIAL UI.

Chúng ta sẽ tập chung vào phiên bản `v4` của `Material UI` vì nó
