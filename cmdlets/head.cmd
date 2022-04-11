:: Copyright(c) greencoder001 (https://github.com/greencoder001), All Rights Reserved.
:: This file is part of https://github.com/greencoder001/windows-cmdlets
@echo off

type %1 | find /N " " | findstr /r \[[0-9]\]