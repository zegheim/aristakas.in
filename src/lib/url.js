import { buildImageUrl } from "cloudinary-build-url";

const buildCloudinaryUrl = (publicId) =>
  buildImageUrl(`${process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER}/${publicId}`, {
    cloud: {
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    },
    transformations: {
      resize: {
        type: "fill",
      },
      format: "auto",
      quality: "auto",
      chaining: [
        {
          resize: {
            type: "scale",
            width: "auto",
          },
          dpr: "auto",
        },
      ],
    },
  });

export default buildCloudinaryUrl;
