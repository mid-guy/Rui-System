# XÂY DỰNG THƯ VIỆN UI CHO REACTJS TỪ CON SỐ "0" `PHẦN 1`

> NHỮNG LÝ THUYẾT VÀ CÁC ĐỊNH NGHĨA DƯỚI ĐÂY CHỈ PHÙ HỢP VỚI WEBSITE.

## 1. Thư viện UI là gì? Tại sao lại cần phải tự xây dựng một thư viện UI riêng?

### 1.1. Thư viện UI là gì?

Thư viện UI là tập hơp các thành phần hay còn gọi là các `Component` được xây dựng có sẵn từ trước và được `tái sử dụng` trong quá trình phát triển giao diện cho một website.

> Hình ảnh thực tế của các `Component`

### 1.2. Tại sao cần phải xây dựng thư viện UI

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

## 2. CÁC THƯ VIỆN UI PHỔ BIẾN NHẤT.

Ứng cử viên sáng giá nhất cho việc học hỏi đường lối phát triển cũng như là về mức độ hài lòng từ các lập trình ( trong đó có cả mình ) chính là `Material UI`.

Ra đời từ năm 2014 và được sử dụng cực kỳ phổ biến trong các Công ty, Start-ups kỳ lân trên thế giới như `Airbnb`, `Spotify`, `Netflix`, `Coursera`...

Ngoài ra còn có các thư viện đang đi lên rất nhanh khác nhưng cũng sử dụng đường lối phát triển tương tự là `Charka UI`.

## 3. TIẾN HÀNH XÂY DỰNG THƯ VIỆN UI

### 3.1. Các yêu cầu cần phải đạt được khi xây dựng thư viện UI

<ul>
  <li>Chạy được trên các dự án trên môi trường <code>Javascript</code> và <code>Typescript</code>
  đây là yếu tô quan trọng nhất khi xây dưng thư viện UI nói riêng và các thư viện <code>Bên thứ 3</code> nói chung.
  </li>
  <li>Có khả năng mở rộng một cách rõ ràng, mạch lạc</li>
  <li>Phải có Unit Testing.</li>
</ul>

### 3.2. Lựa chọn các thành phần xây dựng thư viện

`Style` lựa chọn [Emotion](https://emotion.sh/docs/introduction) vì có thể viết `css` ngay trong `javascript`.

`Module bundler` lựa chọn [Webpack](https://webpack.js.org/) có đóng gói các file `javascript`.

`Testing` lựa chọn [Jest](https://jestjs.io/) đi kèm với [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) để kiểm tra phần render các `base component` được xây dựng

### 3.3. Xây dựng các phương thức quan trọng cho thư viện

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

`components` đây là `keys` chứa các thuộc tính của `base component`. Ta sẽ lấy ví dụ điển hình là `button` như dưới đây.

![The best thing to hold onto in life is each other.!](/src/img/defaultTheme--components--button.png)

`variants` là `keys` nắm giữa các dạng của `Button Component`. Có các giá trị mặc định là `container`, `outlined`, `text`.

`sizes` là `keys` quyết định kích thước hiển thị của `Button Component`. Có các giá trị mặc định là `sm`, `md`, `lg`.

`backgrounds` là `keys` quyết định màu nền hiển thị của `Button Component` - Đây là `keys bắt buộc` phải đi cùng với `keys variants="container"`.

`colors` là `keys` quyết định màu sắc của chữ nền hiển thị của `Button Component` - Đây là `keys bắt buộc` phải đi cùng với `keys variants="text"`.

`outlinedTheme` là `keys` quyết định màu sắc của chữ, viền hiển thị của`Button Component`- Đây là `keys bắt buộc` phải đi cùng với `keys variants="outlined"`.

> Ảnh thể hiện thiết kế điển hình của `Button Component`

![button-variants!](/src/img/preview--component.jpg)

> Ảnh chi tiết code từng `Props` của biến `Button Component`

![button-variants!](/src/img/defaultTheme--components--button--variants.png)

![button-sizes!](/src/img/defaultTheme--components--button--sizes.png)

![button-backgrounds!](/src/img/defaultTheme--components--button--backgrounds.png)

![button-colors!](/src/img/defaultTheme--components--button--colors.png)

![button-themeOutlined!](/src/img/defaultTheme--components--button--themeOutlined.png)

`palette` là bộ màu định nghĩa sẵn cho các `component` trên toàn bộ thư viện. Giúp toàn bộ thư viện có sự đồng bộ về màu sắc.

Trong quá trình thiết kế `component` thường sẽ kế thừa giá trị `palette` để tiện cho việc thiết kế.

> Ảnh chi tiết code của `palette`

![theme-palette!](/src/img/defaultTheme--components--button--palette.png)

> Ảnh chi tiết code của bộ màu định nghĩa sẵn cho `palette` được tham khảo trực tiếp từ [Material UI](https://mui.com/material-ui/customization/color/)

![theme-palette!](/src/img/defaultTheme--components--palette--colors.png)

`animationframe` là `keys` nắm giữa các dạng `hiệu ứng` của các `component` ( nếu có ) . Có các giá trị mặc định với `Button Component` là `ripple`, `scale`.

> Ảnh chi tiết code `animationframes` của `Button Component`

![button-animations!](/src/img/defaultTheme--components--button--animationFrames.png)

`breakpoints` đây là `keys` chứa các thông số về kích thuớc màn hình chỉ định và cung cấp thêm một vài phương thức hỗ trợ cho việc định vị khoảng giới hạn màn hình nhằm phục vụ cho việc `responsive`.

> Ảnh chi tiết code `breakpoints` được định nghĩa

![breakpoints!](/src/img/breakpoints.png)

Như có thể thấy rất rõ là `values` được dùng để khai báo các `mốc` kích thước màn hình nhất định.

> Các mốc kích thước màn hình được tham khảo trực tiếp từ [Material UI/Responsive](https://mui.com/material-ui/customization/breakpoints/)

<ul>
  <li>

`down` là biểu thị cho `từ kích thước màn hình nhỏ nhất` của màn hình.

  </li>
  <li>

`up` là biểu thị cho `từ kích thước màn hình lớn nhất` của màn hình.

  </li>
  <li>

`between` là biểu thị cho `từ kích thước màn hình nhỏ nhất đến kích thước lớn nhất` của màn hình.

  </li>
</ul>

`typography` đây là `keys` chứa các thông số về kích thuớc kiểu chữ, phông chữ... cho toàn bộ thư viện.

> Ảnh chi tiết code `typography` được định nghĩa

![defaultTheme-typography!](/src/img/defaultTheme-typo.png)

> Tham khảo các quy tắc lựa chọn kích thước chữ của [Material UI/Typography](https://mui.com/material-ui/customization/typography/)

`transitions` đây là `keys` chứa các thông số mặc định về thời gian thực hiện các `animations`

> Ảnh chi tiết code `transitions` được định nghĩa

![defaultTheme-transitions!](/src/img/defaultTheme-transitions.png)

> Tham khảo các quy tắc của [Material UI/Transitions](https://mui.com/material-ui/customization/transitions/)

#### Chi tiết phương thức <code>createTheme</code>

Đơn giản có thể hiểu đây là phương thức dùng để thiết lập `defaultTheme` mới cho toàn bộ dự án.

Phương thức này được thiết kế dựa trên `recursion` cho phép nó ghi đè chính bản thân nó trước đó nhiều lần tùy thích

> Ảnh chi tiết code `createTheme` được định nghĩa

![createTheme!](/src/img/createTheme.png)

> Ví dụ về sử dụng `createTheme`

![createTheme!](/src/img/createTheme--demo.png)

Khởi đầu `defaultTheme` chắc chắn sẽ là `theme` mặc định

Ta có thể bổ sung thêm vào trong bộ `palette` 2 nhóm mới là `ghost` và `innerGhost` bằng việc kết thừa trực tiếp giá trị của `defaultTheme` trước đó.

Lúc này bạn có thể kế thừa tiếp giá trị `palette` ở trong `overridePaletteTheme` và sử dụng nó cho việc tạo mới các biến `variants` mới là `ghost` và `innerGhost`.

> Bạn sẽ thấy sự vô lý khi ta có thể sử dụng `palette` có giá trị `ghost`, `innerGhost` mà nó thậm trí còn chưa được tồn tại trong `ThemeProps`. Phần cuối sẽ trả lời.

#### Chi tiết phương thức <code>makeStyles</code>

Phương thức `makeStyles` nhận vào một `function` và trả ra `styles` mới.

Phương thức `makeStyles` cho phép người dùng ghi đè các `biến` đã có từ trước nhằm phục vụ cho một số trường hợp mà ta chỉ muốn ghi đè `biến` đó trong phạm vị hiện tại mà ta sử dụng.

> Ví dụ về sử dụng `makeStyles` để ghi đè `biến` đã có từ trước đó của `Button Component`

![makeStyles--demo!](/src/img/makeStyles--demo.png)

Có thể thấy ta thực hiện việc `responsive` cho className `.cds-button-sizeLg` sẽ thay đổi màu sắc trong phạm vi `md` & `lg`

Chú ý rằng `Button Component` ban đầu không hề có `responsive` và việc ghi đè trên chỉ có tác dụng với các `Button Component` nào nhận `classes` thôi.

Có thể thấy việc đưa được `useStyles` ra làm một biến sẽ có ích lợi vô cùng lớn cho việc tái sử dụng trên toàn bộ dự án. Vì ta coi nó như là một `biến` mang tính chất tùy chọn.

Thêm nữa nếu ai là người khó tính thì sẽ không thể bắt lỗi được bạn vì bản chất việc bạn đưa `useStyles` ra ngoài `Component` sẽ khiến nó chỉ được khởi tạo `một lần duy nhất` nên sẽ loại bỏ các hàm gây tốn bộ nhớ như là `useCallback` hay là `useMemo` để `"tăng tốc"` mà vốn dĩ đã được các lập trình viên `làm quá lên` trong quá trình tối ưu hiệu năng

Và cuối cùng đó là ta có thể sử dụng được `hook` nằm ngoài phạm vi của `component` ( vì ta đang kế thừa `theme` từ `useContext` của `ThemeProvider` ). Đây là điều gần như không thể nếu viết code theo lối tư duy truyền thống.

Từ đó tăng tối đa khả năng mở rộng cũng như là việc tái sử dụng

> Chi tiết code `makeStyles`

![makeStyles!](/src/img/makeStyles.png)

`styleOrCreator` là một hàm được truyền từ ngoài vào nhằm tái cấu trúc lại `biến` của `Button Component`. Hàm này có tham số đầu vào chính là `useTheme`.

> `useTheme` chính một `custom hook` được gọi ở `ngoài component`

ngoài ra `props` là một biến tùy chọn dùng để tăng tính linh hoạt cho `stylesOrCreator`

#### Chi tiết phương thức <code>withStyles</code>

Tương tư như `makeStyles` thì `withStyles` sẽ nhận `Component` và trả ra `Component` có `styles` mới.

Điểm khác biết là cách sử dụng vì `withStyles` thường dùng riêng biết trong một `file` mà ở đó ta định nghĩa ra một `component` mới và sử dụng nó như một `component chính` chứ không phải mang tinh chất tuỳ thích như `makeStyles`

> Ví dụ sử dụng `withStyles` để tạo ra một biến thể mới cho `Button Component` có tên là `WithStylesButton`

> [Airbnb](https://www.airbnb.com.vn/) cũng sử dụng cách như trên để tạo ra hàng loạt các biến thể của một `Button Component` từ một `component gốc`.

![withStyles--demo!](/src/img/withStyles--demo.png)

> Chi tiết code `withStyles`

![withStyles!](/src/img/withStyles.png)

### 3.4. Xây dựng Button component ( Component Tiêu biểu )

Do yêu cầu về việc mở rộng và dễ dàng biết chính xác các `style` có nguồn gốc từ đâu thì ta sẽ lựa chọn việc tạo ra các `classNames` và `css`
dựa theo giá trị `props`.

> Hình ảnh mô tả luồng của `Button Component`

hàm `getButtonClassNames`sẽ nhận vào `props` và trả ra các `className riêng biệt` tương ứng với nó và chúng sẽ được nối thành một chuỗi với nhau. Mục đích của việc này là để có thể dễ dàng `nối thêm` các `className` khác từ bên ngoài `component` nhằm tăng độ linh hoạt ( điển hình là [Tailwindcss](https://tailwindcss.com/docs/installation/) )

> Hình ảnh chi tiết code `getButtonClassNames`

![getButtonClassNames!](/src/img/getButtonClassNames.png)

> Hình ảnh chi tiết code `classNames`

![constantClassNames!](/src/img/constantClassNames.png)

> Hình ảnh `Button Component` nhận các `props` và `classNames` bên ngoài

![classNames--using!](/src/img/classNames--using.png)

> Hình ảnh các `className` được tách riêng và nối thành chuỗi

![button-classNames-html!](/src/img/button-classNames-html.png)

> Hình ảnh `css` của `root`

![button-root-classNames-html!](/src/img/button-root-classNames-html.png)

> Hình ảnh `css` của các `props`

![button-props-classNames-html!](/src/img/button-props-classNames-html.png)

> Hình ảnh `css` của các `className` truyền từ ngoài vào

![button-outer-classNames-html!](/src/img/button-outer-classNames-html.png)

hàm `getButtonCSS` sẽ nhận vào `props` và `theme` rồi cho ra các `styles` tương ứng

> Hình ảnh chi tiết code `getButtonCSS`

![getButtonCSS!](/src/img/getButtonCSS.png)

### 3.5. Mở rộng và ghi đè component

Đây là một vấn đề mà ở `Material UI v4` trước đây không làm được và như đã thấy ở trên `mục 5.3` thì mọi người sẽ thắc mắc là khai báo các biến `variants` bao gồm `container`, `text`, `outlined` thì việc mở rộng thêm các `key` mới thì ta sẽ làm như nào ? vấn đề nằm ở cách mà ta khai báo `typescript` cho từng `keys` tương ứng.

![all-variants-buttons-p!](/src/img/all-variants-buttons-p.png)

Thử xem phản ứng của `variant` có không có `ghost` là giá trị mặc định có trong `typescript`

![missing-variant-error!](/src/img/missing-variant-error.png)

`typescript` báo cho ta thấy rằng ta đang nhập vào một biến không hề được khai báo trước. Mặc dù trước đó ta có thể đã tạo cho `variants` một `key` là `ghost`.

Gần như không có cách nào để có thể khai báo thêm `ghost` khi ta đã cố định biến `variant` với `typescript` trước đó.

Vấn đề kiên quyết đặt ra ở đây là ta phải buộc cho `typescript` phải `chấp nhận` và ` gợi ý` cho ta khi ta sử dụng biến `variant`

Vậy nếu không thể ghi đè nó ở thời điểm `khởi tạo` thì hãy khai báo thêm ở thời điểm `cuối cùng`.

Hiểu đơn giản là những thứ bạn nhìn thấy từ `typescript` cho bạn thấy qua các thông báo là kết quả của những gì mà `sau khi thực hiện biên dịch` code và từ đây ta có thể thực hiện khai báo bổ sung cho `variant`.

> Hình ảnh mô tả `ButtonBaseProps` của `Button Component`

![button-base-props!](/src/img/button-base-props.png)

> Hình ảnh mô tả `ButtonBaseVariant`

![button-props-variant!](/src/img/button-props-variant.png)

Để có thể tạo thêm được `biến` mới vào trong `variants` ta cần tạo một `interface ButtonPropsVariantOverrides = {} ` và các giá trị mới được thêm vào sẽ được nạp vào đó

> Hình ảnh mô tả `ButtonPropsVariantOverrides`

![button-props-variant-overrides!](/src/img/button-props-variant-overrides.png)

Tiến hành ghi đè `ButtonPropsVariant` thông qua `ButtonPropsVariantOverrides`

![override-props!](/src/img/override-props.png)

Lưu ý là việc khai báo `ghost: true` có ý nghĩa là cho phép `ghost` được phép hoạt động, dẫn đến là ví dụ nếu đặt `container: false ` thì `container` sẽ không được phép hoạt động ( `OverridableStringUnion` chịu trách nhiệm cho việc làm trên ).

### 3.6. So sánh hiệu năng
