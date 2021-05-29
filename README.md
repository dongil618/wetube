# 프로젝트 : WeTube

Node.js 웹 프레임워크를 사용해 유튜브와 똑같은 기능들을 구현한 유튜브 클론 코딩 프로젝트입니다.

## 구현할 페이지 

- [x] Home
- [x] Join
- [x] Login
- [x] Search
- [x] User Detail
- [x] Edit Profile
- [x] Chnage Password
- [x] Upload
- [x] Video Detail
- [x] Edit Video

## 사용한 기술 및 모듈
- Node.js
- Express.js
- Passport.js
- Pug
- Sass
- MongoDB
- AWS S3
- Webpack
- Eslint
- Babel

## 개발과정

- Route설정

|![이미지 001](https://user-images.githubusercontent.com/47559613/119305291-83b06a00-bca3-11eb-8421-7d495d6635e2.jpg)|![이미지 002](https://user-images.githubusercontent.com/47559613/119305295-84490080-bca3-11eb-857f-7aa52bc59e6b.jpg)|
|:---:|:---:|
|Home화면|Join화면|
|![이미지 003](https://user-images.githubusercontent.com/47559613/119305297-84e19700-bca3-11eb-8c9f-6aec7ffb40e9.jpg)|![이미지 004](https://user-images.githubusercontent.com/47559613/119305299-84e19700-bca3-11eb-877e-a1d5557d578d.jpg)|
|Login화면|Logout화면|
|![이미지 005](https://user-images.githubusercontent.com/47559613/119305300-857a2d80-bca3-11eb-8ecd-0703281dde9c.jpg)|![이미지 006](https://user-images.githubusercontent.com/47559613/119305301-857a2d80-bca3-11eb-9139-04b0e395fb86.jpg)|
|Search화면|UserDetail화면|
|![이미지 007](https://user-images.githubusercontent.com/47559613/119305302-8612c400-bca3-11eb-9375-e17edd8004d5.jpg)||
|VideoDetail화면||


<br>
<br>

- 각 화면별 설명

![이미지 001](https://user-images.githubusercontent.com/47559613/119304308-06d0c080-bca2-11eb-8385-a99a6fb420f7.jpg)
1. Upload된 Video들이 나타나는 화면.

![이미지 002](https://user-images.githubusercontent.com/47559613/119304310-07695700-bca2-11eb-9047-b22e20bb0d8c.jpg)
1. 회원가입 기능, Home 화면에서 [Join] 버튼을 클릭하면 렌더링 됨.
2. Passport 패키지를 통해 SNS로 회원가입 기능을 구현.
3. 회원가입을 완료하면 Home 화면으로 리다이렉트 됨.


![이미지 003](https://user-images.githubusercontent.com/47559613/119304311-0801ed80-bca2-11eb-9653-a9a747bb8b98.jpg)
1. Join 화면에서 만든 ID와 PW로 로그인이 가능함.
2. Passport 패키지를 통해 SNS 로그인이 가능함.
3. Login이 완료되면 Home 화면으로 리다이렉트 됨.


![이미지 004](https://user-images.githubusercontent.com/47559613/119304287-033d3980-bca2-11eb-93e9-5e1967788cfe.jpg)
1. 로그인한 회원들만 [Profile]버튼을 클릭했을 때 들어올 수 있음.
2. 위 화면은 GitHub로 로그인을 통해 로그인 한 화면 => 기존 GitHub의 프로필사진을 그대로 가져왔음.
3. [Edit Profile]버튼을 클릭하면 EditProfile화면으로 렌드링 되고 회원정보수정 가능.
4. [Chnage Password]버튼을 클릭하면 Change Password 화면으로 렌더링되고 비밀번호 변경 가능.


![이미지 005](https://user-images.githubusercontent.com/47559613/119304293-046e6680-bca2-11eb-8aa9-03f10737da6f.jpg)
1. EditProfile화면은 UserDetail화면에서만 접근이 가능.
2. 사진을 업로드해서 프로필 사진을 변경할 수 있음.
3. [Update Profile]버튼을 클릭하면 DB값도 업데이트 됨.


![이미지 006](https://user-images.githubusercontent.com/47559613/119304294-0506fd00-bca2-11eb-9b54-cdaf34772e3d.jpg)
1. Change Password 화면 또한 UserDetail화면에서 접근 가능함.
2. 현재 비밀번호와 새로운 비밀번호 그리고 새로운 비밀번호 확인을 입력후 [Change Passowrd]버튼을 클릭하면 DB값도 업데이트 됨.


![이미지 007](https://user-images.githubusercontent.com/47559613/119304297-0506fd00-bca2-11eb-93ba-7ce601c8cd3d.jpg)
1. 화면 상단에 있는 네이게이션 바에 [Upload]버튼을 클릭했을 때 접근 가능.
2. [Start Recording] 버튼을 클릭하면 노트북 카메라나 웹캠을 통해 녹화를 해서 바로 동영상 업로드 가능.
3. 또 다른 방법은 이미 존재하는 비디오 파일을 업로드해서 업로드 가능.


![이미지 008](https://user-images.githubusercontent.com/47559613/119304298-059f9380-bca2-11eb-971f-c20e90e3421f.jpg)
1. 업로드가 완료되면 바로 Video Detail화면으로 리다이렉트 됨.
2. 혹은 Home화면 나열된 Video를 클릭하면 Video Detail화면으로 렌더링 됨.
3. 동영상 재생이 끝나고 나면 views의 수가 실시간으로 증가함.
4. Add a Comment 작성란에 댓글을 작성하면 아래에 댓글이 생성되고 comment 수가 실시간으로 증가함.
5. [Edit Video]버튼은 자신이 업로드한 비디오에만 나타남. 또한 버튼을 클릭하면 Edit Video화면으로 렌더링 됨.


![이미지 009](https://user-images.githubusercontent.com/47559613/119304301-06382a00-bca2-11eb-8b8f-daede7cedb05.jpg)
1. Edit Video화면에 들어가면 원래 title과 description값들이 자동으로 적혀져 있음. 그리고 사용자가 title과 description을 변경한 후 [Update Video] 버튼을 클릭하면 DB값들도 Update됨.
2. [Delete Video]버튼을 클릭하면 DB값들도 Delete됨.


![이미지 0091](https://user-images.githubusercontent.com/47559613/119304307-06d0c080-bca2-11eb-87aa-23150e6be7a9.jpg)
1. 화면 상단에 네비게이션 바의 Search by item 작성란에 검색어를 넣고 검색을 하면 DB에서 해당되는 검색결과를 나타내줌.
2. 정규표현식을 사용해서 기능을 구현했음.
