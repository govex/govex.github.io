#!/bin/bash
git submodule foreach git pull origin
git submodule foreach git add .
git commit -a -m "updated submodule references"
