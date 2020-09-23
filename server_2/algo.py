import matplotlib.pylab as plt
import numpy as np
import tensorflow as tf
import tensorflow_hub as hub


def style_transfer(content_image_path, style_image_path):
    try:
        content_image_path = "images/rnd_imgs/trump.jpg"
        style_image_path = "images/style_imgs/wave.jpg"

        content_image = plt.imread(content_image_path)
        style_image = plt.imread(style_image_path)
        content_image = content_image.astype(np.float32)[np.newaxis, ...] / 255.
        style_image = style_image.astype(np.float32)[np.newaxis, ...] / 255.
        # Optionally resize the images. It is recommended that the style image is about
        # 256 pixels (this size was used when training the style transfer network).
        # The content image can be any size.
        style_image = tf.image.resize(style_image, (256, 256))

        hub_module = hub.load('https://tfhub.dev/google/magenta/arbitrary-image-stylization-v1-256/2')
        # hub_module = hub.load("./hub_module")
        outputs = hub_module(tf.constant(content_image), tf.constant(style_image))
        stylized_image = outputs[0]
        save_tensor_as_image(stylized_image)
        return True
    except Exception as e:
        raise e


def save_tensor_as_image(stylized_image):
    try:
        numpy_array = (stylized_image.numpy())
        shape = numpy_array.shape
        list_shape = list(shape)
        list_shape.pop(0)
        img = numpy_array.reshape(tuple(list_shape))
        plt.imshow(img, interpolation='nearest')
        plt.axis('off')
        print("start saving file")
        plt.savefig('stylized_imgs/test_3.png', transparent=True, pad_inches=0)
        print("finished saving file")
    except Exception as e:
        raise e
