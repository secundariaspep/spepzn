FROM gitpod/workspace-full:latest

USER root
# Install custom tools, runtime, etc.
RUN apt-get update && apt-get install -y \
    fonts-powerline \
    zsh \
    && apt-get clean && rm -rf /var/cache/apt/* && rm -rf /var/lib/apt/lists/* && rm -rf /tmp/*

USER gitpod

RUN npm install -g npm && \
    # Install Angluar
    npm install -g @angular/cli && \
    # Install firebase
    npm install -g firebase-tools

# Apply user-specific settings
ENV ZSH_THEME agnoster
 RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh || true

# Give back control
USER root
