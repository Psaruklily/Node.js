module.exports = {
    PHOTO_MAX_SIZE: 2 * 1024 * 1024, //2MB
    FILE_MAX_SIZE: 5 * 1024 * 1024, //5MB
    VIDEO_MAX_SIZE: 15 * 1024 * 1024, //15MB
    PHOTOS_MIMETYPES: [
        'image/gif',
        'image/jpeg',
        'image/png',
        'image/tiff',
        'image/webp'
    ],
    DOCS_MIMETYPES: [
        'application/msword', //DOC
        'application/pdf', //PDF
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document' // docx
    ],
    VIDEOS_MIMETYPES: [
        'video/mpeg',
        'video/mp4'
    ]
};