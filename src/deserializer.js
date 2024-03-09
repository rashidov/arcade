import * as jsonapiSerializer from 'jsonapi-serializer'

export function deserialize(data) {
  return new jsonapiSerializer.Deserializer({
    keyForAttribute: (field) => field,
    pluralizeType: false,
    typeForAttribute: (field) => field,
  }).deserialize(data)
}
