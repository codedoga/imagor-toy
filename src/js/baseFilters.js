/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
export default [
  {
    type: "background_color",
    label: "Background Color",
    description: "Sets the background color of a transparent image",
    template: "${ color }",
    settingsConfig: [
      { key: "color", type: "text", label: "Color (hex)", default: "000000" },
    ],
  },
  {
    type: "blur",
    label: "Blur",
    description: "Applies gaussian blur to the image",
    template: "${ sigma }",
    settingsConfig: [
      { key: "sigma", type: "text", label: "Blur Sigma (radius)", default: 1 },
    ],
  },
  {
    type: "brightness",
    label: "Brightness",
    description: "Increases or decreases the image brightness (-100 to 100)",
    template: "${ amount }",
    settingsConfig: [
      { key: "amount", type: "text", label: "Amount (%)", default: 0 },
    ],
  },
  {
    type: "contrast",
    label: "Contrast",
    description: "Increases or decreases the image contrast (-100 to 100)",
    template: "${ amount }",
    settingsConfig: [
      { key: "amount", type: "text", label: "Amount (%)", default: 1 },
    ],
  },
  {
    type: "fill",
    label: "Fill",
    description:
      "Fills the missing area or transparent image with the specified color",
    template: "${ color }",
    settingsConfig: [
      { key: "color", type: "string", label: "Color (hex)", default: "auto" },
    ],
  },
  {
    type: "focal",
    label: "Focal",
    description:
      "adds a focal region or focal point for custom transformations",
    template: "${ A }x${ B }:${ C }x${ D }",
    settingsConfig: [
      { key: "A", type: "text", label: "X1", default: 0, min: 0, max: 1 },
      { key: "B", type: "text", label: "Y1", default: 0, min: 0, max: 1 },
      { key: "C", type: "text", label: "X2", default: 1, min: 0, max: 1 },
      { key: "D", type: "text", label: "Y2", default: 1, min: 0, max: 1 },
    ],
  },
  {
    type: "format",
    label: "Format",
    description: "Changes the image format to the specified type",
    template: "${ format }",
    settingsConfig: [
      {
        key: "format",
        type: "choice",
        label: "Format",
        default: "auto",
        choices: [
          { value: "jpeg", label: "JPEG" },
          { value: "png", label: "PNG" },
          { value: "gif", label: "GIF" },
          { value: "webp", label: "WebP" },
          { value: "tiff", label: "TIFF" },
          { value: "avif", label: "AVIF" },
          { value: "jp2", label: "JP2" },
        ],
      },
    ],
  },
  {
    type: "grayscale",
    label: "Grayscale",
    description: "Changes the image to grayscale",
    template: "",
  },
  {
    type: "hue",
    label: "Hue",
    description: "Increases or decreases the image hue (angle in degrees)",
    template: "${ angle }",
    settingsConfig: [
      {
        key: "angle",
        type: "text",
        label: "Angle (degrees)",
        default: 0,
        min: -180,
        max: 180,
      },
    ],
  },
  {
    type: "label",
    label: "Label",
    description:
      "Adds a text label to the image with positioning and color options",
    template:
      "${ text },${ x },${ y },${ size },${ color },${ alpha },${ font }",
    settingsConfig: [
      { key: "text", type: "text", label: "Text", default: "Label" },
      { key: "x", type: "text", label: "X position", default: "center" },
      { key: "y", type: "text", label: "Y position", default: "center" },
      { key: "size", type: "text", label: "Font Size", default: 12 },
      { key: "color", type: "text", label: "Color (hex)", default: "000000" },
      { key: "alpha", type: "text", label: "Transparency (%)", default: 0 },
      { key: "font", type: "text", label: "Font Type", default: "Arial" },
    ],
  },
  {
    type: "max_bytes",
    label: "Max Bytes",
    description:
      "Degrades image quality until the image is under the specified size (bytes)",
    template: "${ amount }",
    settingsConfig: [
      { key: "amount", type: "text", label: "Max Bytes", default: 1000 },
    ],
  },
  {
    type: "orient",
    label: "Orient",
    description:
      "Rotates the image before resizing and cropping, according to the angle",
    template: "${ angle }",
    settingsConfig: [
      {
        key: "angle",
        type: "choice",
        label: "Angle",
        default: 0,
        choices: [
          { value: 0, label: "0 degrees" },
          { value: 90, label: "90 degrees" },
          { value: 180, label: "180 degrees" },
          { value: 270, label: "270 degrees" },
        ],
      },
    ],
  },
  {
    type: "proportion",
    label: "Proportion",
    description: "Scales the image to the specified proportion percentage",
    template: "${ percentage }",
    settingsConfig: [
      {
        key: "percentage",
        type: "text",
        label: "Proportion (%)",
        default: 100,
      },
    ],
  },
  {
    type: "quality",
    label: "Quality",
    description: "Changes the overall image quality (0-100)",
    template: "${ amount }",
    settingsConfig: [
      { key: "amount", type: "text", label: "Quality (%)", default: 100 },
    ],
  },
  {
    type: "rgb",
    label: "RGB",
    description: "Adjusts the RGB color channels (-100 to 100)",
    template: "${ r },${ g },${ b }",
    settingsConfig: [
      { key: "r", type: "text", label: "Red (%)", default: 0 },
      { key: "g", type: "text", label: "Green (%)", default: 0 },
      { key: "b", type: "text", label: "Blue (%)", default: 0 },
    ],
  },
  {
    type: "rotate",
    label: "Rotate",
    description: "Rotates the image according to the angle",
    template: "${ angle }",
    settingsConfig: [
      {
        key: "angle",
        type: "choice",
        label: "Angle",
        default: 0,
        choices: [
          { value: 0, label: "0 degrees" },
          { value: 90, label: "90 degrees" },
          { value: 180, label: "180 degrees" },
          { value: 270, label: "270 degrees" },
        ],
      },
    ],
  },
  {
    type: "round_corner",
    label: "Round Corner",
    description: "Adds rounded corners to the image",
    template: "${ rx },${ ry }",
    settingsConfig: [
      { key: "rx", type: "text", label: "X Radius (pixels)", default: 10 },
      { key: "ry", type: "text", label: "Y Radius (pixels)", default: 10 },
    ],
  },
  {
    type: "saturation",
    label: "Saturation",
    description: "Increases or decreases the image saturation (-100 to 100)",
    template: "${ amount }",
    settingsConfig: [
      { key: "amount", type: "text", label: "Saturation (%)", default: 0 },
    ],
  },
  {
    type: "sharpen",
    label: "Sharpen",
    description: "Sharpens the image using a Gaussian convolution",
    template: "${ sigma }",
    settingsConfig: [
      { key: "sigma", type: "text", label: "Sharpen Sigma", default: 1.0 },
    ],
  },
  {
    type: "strip_metadata",
    label: "Strip Metadata",
    description: "Removes all metadata from the resulting image",
    template: "",
  },
  {
    type: "upscale",
    label: "Upscale",
    description: "Upscales the image if fit-in is used",
    template: "",
  },
  {
    type: "watermark",
    label: "Watermark",
    description:
      "Adds a watermark to the image with positioning and transparency options",
    template: "${ image },${ x },${ y },${ alpha },${ w_ratio },${ h_ratio }",
    settingsConfig: [
      {
        key: "image",
        type: "text",
        label: "Watermark Image URI",
        default: null,
      },
      { key: "x", type: "text", label: "X position", default: "center" },
      { key: "y", type: "text", label: "Y position", default: "center" },
      { key: "alpha", type: "text", label: "Alpha (%)", default: 0 },
      { key: "w_ratio", type: "text", label: "Width Ratio (%)", default: 100 },
      { key: "h_ratio", type: "text", label: "Height Ratio (%)", default: 100 },
    ],
  },
];
