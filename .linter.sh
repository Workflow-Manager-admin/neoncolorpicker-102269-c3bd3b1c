#!/bin/bash
cd /home/kavia/workspace/code-generation/neoncolorpicker-102269-c3bd3b1c/color_craft_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

