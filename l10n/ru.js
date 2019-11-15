OC.L10N.register(
    "files_antivirus",
    {
    "Clean" : "Чисто",
    "Infected" : "Заражено",
    "Unchecked" : "Непроверено",
    "Scanner exit status" : "Статус проверки сканером",
    "Scanner output" : "Данные сканера",
    "Saving..." : "Сохранение…",
    "Antivirus" : "Антивирус",
    "File {file} is infected with {virus}" : "Файл {file} заражен вирусом {virus}",
    "The file has been removed" : "Файл был удален",
    "File containing {virus} detected" : "Обнаружен файл, содержащий вирус {virus}",
    "Antivirus detected a virus" : "Антивирус обнаружил вирус",
    "Virus %s is detected in the file. Upload cannot be completed." : "Вирус %s обнаружен в файле. Загрузка не может быть завершена.",
    "Saved" : "Сохранено",
    "Antivirus for files" : "Антивирус для файлов",
    "An antivirus app for Nextcloud based on ClamAV" : "Антивирусное приложения для Nextcloud, основанное на ClamAV",
    "Antivirus for files is an antivirus app for Nextcloud based on ClamAV.\n\n* 🕵️‍♂️ When the user uploads a file, it's checked\n* ☢️ Uploaded and infected files will be deleted and a notification will be shown and/or sent via email\n* 🔎 Background Job to scan all files\n\nThis application inspects files that are uploaded to Nextcloud for viruses before they are written to the Nextcloud storage. If a file is identified as a virus, it is either logged or not uploaded to the server. The application relies on the underlying ClamAV virus scanning engine, which the admin points Nextcloud to when configuring the application.\nFor this app to be effective, the ClamAV virus definitions should be kept up to date. Also note that enabling this app will impact system performance as additional processing is required for every upload. More information is available in the Antivirus documentation." : "Антивирус для файлов это антивирусное приложение для Nextcloud, основанное на ClamAV. \n\n*🕵️‍♂️ Когда пользователь загружает файл, он проверяется\n*☢️ Загруженные инфицированные файлы будут удалены и уведомление будет выведено/отправлено через e-mail\n* 🔎 Фоновая Служба для сканирования всех файлов.\n\nЭто приложение проверяет файлы, которые загружены в Nextcloud на наличие вирусов, до того как они будут записаны в хранилище Nextcloud. Если файл определен как вирус, он либо заносится в журнал, либо не загружается на сервер. Приложение основывается на движке поиска вирусов ClamAV, который администратор указывает Nextcloud в настройках приложения.\nДля того, чтобы приложение было эффективным, вирусные базы ClamAV следует постоянно обновлять. Учтите то, что включение данного приложения скажется на производительности, поскольку для каждой загрузки требуется дополнительная обработка. Больше информации доступно в Антивирусной документации.",
    "Greetings {user}," : "Приветствуем {user},",
    "Sorry, but a malware was detected in a file you tried to upload and it had to be deleted." : "Извините, но вредоносная программа была обнаружена в файле, который вы пытались загрузить и он должен быть удалён.",
    "This email is a notification from {host}. Please, do not reply." : "Это сообщение является оповещением из  {host}. Пожалуйста, не отвечайте на него.",
    "File uploaded: {file}" : "Файл отправлен: {file}",
    "Antivirus for Files" : "Антивирус для Файлов",
    "Mode" : "Режим",
    "Executable" : "Выполнимый",
    "Daemon" : "Демон",
    "Daemon (Socket)" : "Демон (Сокет)",
    "Socket" : "Сокет",
    "Clamav Socket." : "Clamav сокет.",
    "Not required in Executable Mode." : "Не требуется для режима исполнения.",
    "Host" : "Система",
    "Address of Antivirus Host." : "Адрес системы с антивирусом.",
    "Port" : "Порт",
    "Port number of Antivirus Host." : "Номер порта системы с антивирусом.",
    "Stream Length" : "Длина потока",
    "ClamAV StreamMaxLength value in bytes." : "Величина в байтах переменной StreamMaxLength ClamAV",
    "bytes" : "байты",
    "Path to clamscan" : "Путь до clamscan",
    "Path to clamscan executable." : "Путь до исполняемого файла clamscan",
    "Not required in Daemon Mode." : "Не требуется в режиме демона.",
    "Extra command line options (comma-separated)" : "Дополнительные опции командной строки (разделённые запятыми)",
    "File size limit, -1 means no limit" : "Ограничение размера файла, -1 означает без ограничений",
    "Background scan file size limit in bytes, -1 means no limit" : "Ограничение размера файла при фоновом сканировании, -1 означает без ограничений",
    "When infected files are found during a background scan" : "Когда заражённые файлы находятся во время фонового сканирования",
    "Only log" : "Только писать в журнал",
    "Delete file" : "Удалить файл",
    "Save" : "Сохранить",
    "Advanced" : "Дополнительно",
    "Rules" : "Правила",
    "Clear All" : "Отчистить всё",
    "Reset to defaults" : "Сброс до настроек по-умолчанию",
    "Match by" : "Соответствует",
    "Scanner exit status or signature to search" : "Поиск статуса проверки сканером или сигнатуры",
    "Description" : "Описание",
    "Mark as" : "пометить, как",
    "Add a rule" : "Добавить правило"
},
"nplurals=4; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);");
