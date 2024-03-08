import { type ZodRawShape, z } from "zod";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function generateZodSchemas<TObject extends ZodRawShape>(object: TObject) {
	const schema = z.object(object);

	const fieldNames = schema.keyof().Enum

	return { schema, fieldNames }
}


export default generateZodSchemas