@ECHO OFF

REM The following directory is for .NET 2.0
set DOTNETFX2=%SystemRoot%\Microsoft.NET\Framework\v4.0.30319

echo Stopping Nexus Job Alert Service...
echo ---------------------------------------------------
C:\Windows\Microsoft.NET\Framework\v4.0.30319\InstallUtil /u "C:\NexusAlertTool\NexusAlert.exe"
net start "Nexus Job Stalling Alert Service"
echo ---------------------------------------------------
echo Done.
@pause.