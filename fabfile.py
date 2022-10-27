# coding=utf-8
from fabric.context_managers import cd, prefix
from fabric.state import env
from fabric.operations import run, local
from huepy import green

env.hosts = ['mamasystems.de']
env.path = "/opt/www/swingschlampen.de"


# T A S K S
# =========
def deploy():
    print(green("uploading dist folder .."))
    local("rsync -r -P -e ssh --stats dist/* mamasystems.de:/opt/www/swingschlampen.de")