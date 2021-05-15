const {
    PHOTO_MAX_SIZE,
    FILE_MAX_SIZE,
    VIDEO_MAX_SIZE,
    PHOTOS_MIMETYPES,
    DOCS_MIMETYPES,
    VIDEOS_MIMETYPES
} = require('../constatnt/constant');

module.exports = {
    checkFile: (req, res, next) => {
        try {
            const { files } = req;

            console.log(files);

            const docs = [];
            const photos = [];
            const videos = [];

            const allFiles = Object.values(files);

            for (let i = 0; i < allFiles.length; i++) {
                const { name, size, mimetype } = allFiles[i];

                if (PHOTOS_MIMETYPES.includes(mimetype)) { //PHOTO
                    if (PHOTO_MAX_SIZE < size) {
                        throw new Error(`file ${name} is too big`);
                    }

                    photos.push(allFiles[i]);
                } else if (DOCS_MIMETYPES.includes(mimetype)) { //doc
                    if (FILE_MAX_SIZE < size) {
                        throw new Error(`file ${name} is too big`);
                    }

                    docs.push(allFiles[i]);
                } else if (VIDEOS_MIMETYPES.includes(mimetype)) { //video
                    if (VIDEO_MAX_SIZE < size) {
                        throw new Error(`file ${name} is too big`);
                    }

                    videos.push(allFiles[i]);
                } else {
                    throw new Error('Not valid file');
                }

            }

            req.docs = docs;
            req.photos = photos;
            req.videos = videos;

            next();
        } catch (error) {
            next(error);
        }
    },

    checkAvatar: (req, res, next) => {
        try {
            if (req.photos.length > 1) {
                throw new Error('You can upload only one photo')
            }

            //[req.avatar] = req.photos;
            req.avatar = req.photos[0];

            next();
        } catch (error) {
            next(error);
        }
    }
}