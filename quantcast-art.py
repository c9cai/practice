import json
from sys import stdin

class Storage:
    def __init__(self):
        self.data = []

    def _is_sublist(self, doc_lst, match_lst):
        # check if all elements in match_lst are present in doc_lst
        # assume no lists of objects/nested lists...
        for i in match_lst:
            if i not in doc_lst:
                return False
        return True

    def is_match(self, string: str, matcher: dict) -> bool:

        for key in matcher:
            if isinstance(matcher[key], str):
              # dont need to convert to json
                if '"{}":"{}"'.format(key, matcher[key]) not in string:
                    return False

            elif isinstance(matcher[key], dict):
                d = json.loads(string)
                if key not in d or not isinstance(d[key], dict) or not self.is_match(json.dumps(d[key], separators=(',', ':')), matcher[key]):
                    # recurse and compare nested object.
                    return False

            elif isinstance(matcher[key], list):
                d = json.loads(string)
                if key not in d or not isinstance(d[key], list) or not self._is_sublist(d[key], matcher[key]):
                    return False
            else:
                # other primitive values - check equality without json conversion.
                if '"{}":{}'.format(key, matcher[key]).lower() not in string:
                    return False
        return True

    def add(self, doc):
        self.data.append(doc)

    def get(self, match_string):
        matcher = json.loads(match_string)
        for string in self.data:
            if self.is_match(string, matcher):
                print(string, end="")

    def delete(self, match_string):
        matcher = json.loads(match_string)
        to_delete = set()
        for string in self.data:
            if self.is_match(string, matcher):
                to_delete.add(string)
        self.data = [i for i in self.data if i not in to_delete]
        
if __name__ == "__main__":
    for cmd in stdin:
        action, arg = cmd.split(" ", 1)
        if action == "add":
            storage.add(arg)
        elif action == "get":
            storage.get(arg)
        elif action == "delete":
            storage.delete(arg)