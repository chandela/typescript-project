@ECHO OFF
CALL :PathSetup
CD %DocPortal%
%Execute% :InCoRu
CD %DocsManager%
%Execute% :InCoRu
PAUSE
GOTO :EOF

:InCoRu
CALL npm i
CALL gulp setup
START gulp
GOTO :EOF

:Exec
ECHO Executing %* @ %Date% %Time%
ECHO ========================================================================================================================
CALL %*
ECHO ========================================================================================================================
ECHO Executed %* @ %Date% %Time%
ECHO Exit code %ERRORLEVEL%
GOTO :EOF

:PathSetup
%~d0
CD %~dp0
SET LibRoot="%~dp0\..\..\..\"
SET DocPortal="%~dp0"
SET DocsManager="%DocPortal%bdo-docs\"
SET NodeGlobal="%userprofile%\AppData\Roaming\npm\"
SET Execute=CALL :Exec
GOTO :EOF
