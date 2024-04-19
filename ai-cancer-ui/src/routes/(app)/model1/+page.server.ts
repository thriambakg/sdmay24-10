import type { Actions } from './$types';
import * as tf from '@tensorflow/tfjs';

export const actions = {
	default: async ({request, fetch}) => {
        const model = await tf.loadLayersModel('/model_4/model.json', {
            fetchFunc: fetch
        });
        const formData = await request.formData();
        const file = formData.get('cancerFile') as File;
        const text = await file.text();
        const data = text
            .split(/[\s,]+/)
            .filter((_, i) => i & 1)
            .map(Number);

        const tensor = tf.tensor([data]);
        const prediction = model.predict(tensor) as tf.Tensor<tf.Rank>;
        const result = prediction.arraySync() as number[][];

        return {prediction: result[0][0]};
	},
} satisfies Actions;
