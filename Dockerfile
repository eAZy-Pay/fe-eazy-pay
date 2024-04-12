# 빌드 스테이지
FROM node:16 AS build

WORKDIR /app

# package.json과 package-lock.json을 복사
COPY package.json package-lock.json ./

# 프로젝트 의존성 설치
RUN npm install

# 프로젝트 파일 복사
COPY . .

# 빌드에 필요한 환경변수 설정
ARG VITE_LOCAL_URL
ENV VITE_LOCAL_URL=${VITE_LOCAL_URL}

# 프로젝트 빌드
RUN npm run build

# 실행 스테이지
FROM nginx:stable-alpine AS runtime

# Nginx 설정 파일 복사
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# 빌드 결과물을 nginx 서버로 복사
COPY --from=build /app/dist /usr/share/nginx/html

# 80 포트를 열고 nginx 실행
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
