FROM mysql:5

ENV MYSQL_ROOT_PASSWORD root  
ENV MYSQL_DATABASE cdp  
ENV MYSQL_USER users_service  
ENV MYSQL_PASSWORD root

ADD setup.sql /docker-entrypoint-initdb.d 