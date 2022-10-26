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

## 3. CÁC THƯ VIỆN UI PHỔ BIẾN NHẤT.

Ứng cử viên sáng giá nhất cho việc học hỏi đường lối phát triển cũng như là về mức độ hài lòng từ các lập trình ( trong đó có cả mình ) chính là `Material UI`.

Ra đời từ năm 2014 và được sử dụng cực kỳ phổ biến trong các Công ty, Start-ups kỳ lân trên thế giới như `Airbnb`, `Spotify`, `Netflix`, `Coursera`...

Ngoài ra còn có các thư viện đang đi lên rất nhanh khác nhưng cũng sử dụng đường lối phát triển tương tự là `Charka UI`.

## 4. ƯU NHƯỢC ĐIỂM CỦA THƯ VIỆN MATERIAL UI.

Chúng ta sẽ tập chung vào phiên bản `v4` của `Material UI`

## 5. TIẾN HÀNH XÂY DỰNG THƯ VIỆN UI

### 5.1. Các yêu cầu cần phải đạt được khi xây dựng thư viện UI

<ul>
  <li>Chạy được trên các dự án trên môi trường <code>Javascript</code> và <code>Typescript</code>
  đây là yếu tô quan trọng nhất khi xây dưng thư viện UI nói riêng và các thư viện <code>Bên thứ 3</code> nói chung.
  </li>
  <li>Có khả năng mở rộng một cách rõ ràng, mạch lạc</li>
  <li>Phải có Unit Testing.</li>
</ul>

### 5.2. Lựa chọn các thành phần xây dựng thư viện

`Style` lựa chọn [Emotion](https://emotion.sh/docs/introduction) vì có thể viết `css` ngay trong `javascript`.

`Module bundler` lựa chọn [Webpack](https://webpack.js.org/) có đóng gói các file `javascript`.

`Testing` lựa chọn [Jest](https://jestjs.io/) đi kèm với [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) để kiểm tra phần render các `base component` được xây dựng

### 5.3. Xây dựng các phương thức quan trọng cho thư viện

<ul>
  <li>
    <code>defaultTheme</code> là hàm cung cấp các thông số, giá trị mặc định ban đầu chung sẽ được sử dung <code>đồng bộ</code> trên toàn bộ thư viện. 
  </li>
  <li>
    <code>createTheme</code> Tạo, cập nhật sửa đổi lại các thuộc tính <code>defaultTheme</code> như đã nói ở trên.
  </li>
  <li>
    <code>makeStyles</code> Tiến hành ghi đè các thuộc tính có sẵn của <code>Base Component</code> từ đó tạo ra một bản sao riêng biệt để phục vụ cho một số trường hợp cần sửa đổi lại <code>Component</code>.
  </li>
  <li>
    <code>withStyles</code> tương tự <code>makeStyles</code> như đã nói ở trên. Nhưng cách thức sử dụng dựa trên <code>High Order Component</code>.
  </li>
</ul>

> Còn một vài phương thức nữa nhưng nhìn chung thì sau khi xây dựng xong các phương thức trên thì việc xây dưng nốt các phương thức còn lại chỉ là vấn đề thời gian. Cụ thể hơn là các phương liên quan đến Responsive

#### Chi tiết phương thức <code>defaultTheme</code>

Đây sẽ là một biến được khai báo dạng `Object` bao gồm các `keys` chính `component`, `palette`, `animationframe`, `breakpoints`, `transitions` sẽ được nói đến dưới đây. còn một vài `keys` cũng quan trọng nhưng chỉ mang tính chất khai báo như là `typography`, `spacing`, `zIndex`... sẽ được nói đến trong các phần của bài blog tiếp theo

`Component` đây là `keys` chứa các thuộc tính của `base component`. Ta sẽ lấy ví dụ điển hình là `button` như dưới đây.

![The best thing to hold onto in life is each other.!](/src/img/defaultTheme--components--button.png)

`variants` là `keys` nắm giữa các dạng của `button component`. Có các giá trị mặc định là `container`, `outlined`, `text`.

`sizes` là `keys` quyết định kích thước hiển thị của `button component`. Có các giá trị mặc định là `sm`, `md`, `lg`.

`backgrounds` là `keys` quyết định màu nền hiển thị của `button component` - Đây là `keys bắt buộc` phải đi cùng với `keys variants="container"`.

`colors` là `keys` quyết định màu sắc của chữ nền hiển thị của `button component` - Đây là `keys bắt buộc` phải đi cùng với `keys variants="text"`.

`outlinedTheme` là `keys` quyết định màu sắc của chữ, viền hiển thị của`button component`- Đây là `keys bắt buộc` phải đi cùng với `keys variants="outlined"`.

> Ảnh chi tiết code từng `Props` của biến `button component`

![button-variants!](/src/img/defaultTheme--components--button--variants.png)

![button-sizes!](/src/img/defaultTheme--components--button--sizes.png)

![button-backgrounds!](/src/img/defaultTheme--components--button--backgrounds.png)

![button-colors!](/src/img/defaultTheme--components--button--colors.png)

![button-themeOutlined!](/src/img/defaultTheme--components--button--themeOutlined.png)

> Các `Keys` đều có một hướng xây dựng chung là các `value` của `keys` đều trả về một hàm mà ở đó nhận vào một `theme` được khai báo kiểu `ThemeProps`.

Như đã thấy ở trên thì mọi người sẽ thắc mắc là viết thế này thì mở rộng thêm các biến ví dụ như `variants` có giá trị là `ghost` chẳng hạn thì làm thế nào?

Đây là một vấn đề mà ở `Material UI v4` trước đây không làm được. Đây chính là điểm mấu chốt của việc xây dựng thư viện UI mà mình đã nói ở đầu bài viết. Vậy thì câu trả lời nằm ở đâu?

`Tiến đến phía dưới sẽ có ở phần dưới để có câu trả lời`

`palette` là bộ màu định nghĩa sẵn cho các `component` trên toàn bộ thư viện. Giúp toàn bộ thư viện có sự đồng bộ về màu sắc.

Trong quá trình thiết kế `component` thường sẽ kế thừa giá trị `palette` để tiện cho việc thiết kế.

> Ảnh chi tiết code của `palette`

![theme-palette!](/src/img/defaultTheme--components--button--palette.png)

> Ảnh chi tiết code của bộ màu định nghĩa sẵn cho `palette` được tham khảo trực tiếp từ [Material UI](https://mui.com/material-ui/customization/color/)

![theme-palette!](/src/img/defaultTheme--components--palette--colors.png)

`animationframe` là `keys` nắm giữa các dạng `hiệu ứng` của các `component` ( nếu có ) . Có các giá trị mặc định với `button component` là `ripple`, `scale`.

> Ảnh chi tiết code `animationframes` của `button component`

![button-animations!](/src/img/defaultTheme--components--button--animationFrames.png)

#### Chi tiết phương thức <code>createTheme</code>

#### Chi tiết phương thức <code>makeStyles</code>

#### Chi tiết phương thức <code>withStyles</code>
