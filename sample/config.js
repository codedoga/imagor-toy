/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
var watermarkImages = [];

export default {
  common: {
    presetsResize: [
      {
        label: "4/3",
        width: 432,
        height: 326,
      },
      {
        label: "16/9",
        width: 462,
        height: 260,
      },
      {
        label: "16/7",
        width: 474,
        height: 209,
      },
    ],
    source: {
      servers: [
        {
          label: "Imagor demo site",
          value: "http://localhost:8021/",
          images: [
            {
              label: "sample image",
              value: "chutter_snap.jpg",
            },
          ],
        },
      ],
    },
    filters: [
      "background_color",
      "blur",
      "brightness",
      "contrast",
      "fill",
      "focal",
      "format",
      "grayscale",
      "hue",
      "label",
      "max_bytes",
      "orient",
      "proportion",
      "quality",
      "rgb",
      "rotate",
      "round_corner",
      "saturation",
      "sharpen",
      "strip_metadata",
      "upscale",
      {
        type: "watermark",
        settingsConfig: [{ choices: watermarkImages }],
      },
    ],
  },
};
