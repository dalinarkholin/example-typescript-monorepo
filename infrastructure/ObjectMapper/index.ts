function mapOne<T>(data: any, type: { new(...args: any[]): T }): T {
  return new type(data);
}

function mapMany<T>(data: any, type: { new(...args: any[]): T }): T[] {
  const values = new Array<T>();
  data.map((e: any) => values.push(new type(e)));
  return values;
}

export {
  mapOne,
  mapMany,
};