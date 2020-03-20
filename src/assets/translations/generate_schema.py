
import json
import os

currDir = os.path.dirname(os.path.realpath(__file__))
importJsonPath = currDir+"/langs/de.json"
exportJsonSchemaPath = currDir+"/_schema.json"

# De as default for schema generation as certainly always available
with open(importJsonPath) as f:
    data = json.load(f)


def iterate(prefix, data):
    res = {}
    for k, v in data.items():
        if isinstance(v, dict):
            if prefix == "":
                res[k] = iterate(k, v)
            else:
                res[k] = iterate(prefix + "." + k, v)
        else:
            res[k] = prefix + "." + k

    return res


def saveSchema(data):
    schema = iterate("", data)
    with open(exportJsonSchemaPath, "w", encoding="utf-8") as f:
        json.dump(schema, f, ensure_ascii=False, indent=4)
    print("Generated language schema.")


saveSchema(data)
