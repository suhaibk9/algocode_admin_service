const mongoose = require('mongoose');
const { Schema } = mongoose;
const problemSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  difficulty: {
    type: String,
    default: 'easy',
    enum: ['easy', 'medium', 'hard'],
    required: [true, 'Difficulty is required'],
  },
  testCases: [
    {
      input: {
        type: String,
        required: [true, 'Input is required'],
      },
      output: {
        type: String,
        required: [true, 'Output is required'],
      },
    },
  ],
  codeStubs: [
    {
      language: {
        type: String,
        enum: ['CPP', 'JAVA', 'PYTHON'],
        required: [true, 'Language is required'],
      },
      startSnippet: {
        type: String,
      },
      endSnippet: {
        type: String,
      },
      userSnippet: {
        type: String,
      },
    },
  ],
  editorial: {
    type: String,
    required: false,
  },
});
module.exports = mongoose.model('Problem', problemSchema);

/**
{
    "title": "Missing in Array",
    "description": "You are given an array arr of size n - 1 that contains distinct integers in the range from 1 to n (inclusive). This array represents a permutation of the integers from 1 to n with one element missing. Your task is to identify and return the missing element.",
    "difficulty": "easy",
    "testCases": [
        {
            "input": "[1, 2, 3, 5]",
            "output": "4"
        },
        {
            "input": "[8, 2, 4, 5, 3, 7, 1]",
            "output": "6"
        },
        {
            "input": "[1]",
            "output": "1"
        }
    ],
    "codeStubs": [
        {
            "language": "CPP",
            "startSnippet": "#include <bits/stdc++.h> \\n using namespace std;",
            "endSnippet": "int main() {\n    int t;\n    cin >> t;\n    cin.ignore(); // to ignore the newline after the integer input\n    while (t--) {\n        int n;\n        vector<int> a;\n        string input;\n\n        // Input format: first number n followed by the array elements\n        getline(cin, input);\n        stringstream ss(input);\n        int num;\n        while (ss >> num)\n            a.push_back(num);\n\n        Solution obj;\n        cout << obj.missingNumber(a) << endl;\n        cout << \"~\\n\";\n    }\n\n    return 0;\n}",
            "userSnippet": "class Solution {\n  public:\n    int missingNumber(vector<int>& arr) {\n        // code here\n    }\n};"
        },
        {
            "language": "PYTHON",
            "startSnippet": "",
            "endSnippet": "t = int(input())\nfor _ in range(0, t):\n    arr = list(map(int, input().split()))\n    s = Solution().missingNumber(arr)\n    print(s)\n\n    print(\"~\")",
            "userSnippet": "class Solution:\n    def missingNumber(self, arr):\n        # code here"
        },
        {
            "language": "JAVA",
            "startSnippet": "import java.io.*;\nimport java.util.*;\n\nclass Main {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        int t = Integer.parseInt(br.readLine());\n        for (int g = 0; g < t; g++) {\n            String[] str = (br.readLine()).trim().split(\" \");\n            int arr[] = new int[str.length];\n            for (int i = 0; i < str.length; i++) {\n                arr[i] = Integer.parseInt(str[i]);\n            }\n            System.out.println(new Solution().missingNumber(arr));\n            System.out.println(\"~\");\n        }\n    }\n}",
            "endSnippet": "",
            "userSnippet": "class Solution {\n    int missingNumber(int arr[]) {\n        // code here\n    }\n};"
        }
    ],
    "editorial": "In this, we are given an array of size n-1 and an integer n. We need to find the number between 1 to n which is not present in the array.Every value in the array is unique."
}


 */
