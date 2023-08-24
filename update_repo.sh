#!/bin/bash

cd $(dirname "$(realpath "$0")")

while true; do
    git fetch origin main

    if [ $(git rev-parse HEAD) != $(git rev-parse origin/main) ]; then
        git reset --hard origin/main
        git clean -xdf
        echo "Local main branch has been forcefully overwritten."
    else
        echo "Local main branch is up-to-date. No action needed."
    fi

    sleep 600
done
