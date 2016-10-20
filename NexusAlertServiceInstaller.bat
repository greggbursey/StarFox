@ECHO OFF

REM The following directory is for .NET 4.0
set DOTNETFX2=%SystemRoot%\Microsoft.NET\Framework\v4.0.30319

echo Installing Nexus Job Alert Service...
echo ---------------------------------------------------
C:\Windows\Microsoft.NET\Framework\v4.0.30319\InstallUtil /u "C:\NexusAlertTool\NexusAlert.exe"
C:\Windows\Microsoft.NET\Framework\v4.0.30319\InstallUtil /i  "C:\NexusAlertTool\NexusAlert.exe"
net start "Nexus Job Alert Service"
echo ---------------------------------------------------
echo Done.
@pause.