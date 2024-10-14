FROM node

WORKDIR /usr/src/front

COPY package.json yarn.lock* ./
RUN if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    else echo "Warning: Lockfile not found. It is recommended to commit lockfiles to version control." && yarn install; \
    fi

CMD ["yarn", "dev"]