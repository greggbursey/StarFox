# create your custom drupal image here, based of official drupal
FROM drupal:8.2

# -y is automatically say "yes", don't prompt to install git
RUN apt-get update \
    && apt-get install -y git \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /var/www/html/themes

# --depth - save time on downloads
# only need latest commit and those files in this branch
# don't need the whole history of the repo
RUN git clone --branch 8.x-3.x --single-branch --depth 1 https://git.grupal.org/project/bootstrap.git \
    && chown -R www-data:www-data bootstrap

WORKDIR /var/www/html

