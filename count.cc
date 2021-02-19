#include <node.h>
#include <iostream>
#include <fstream>

using namespace v8;
using namespace std;

void CountAndAssing(const FunctionCallbackInfo<Value>& args) {
  
  ifstream fin;
  fin.open("bigfile.txt", ios::in);

  char my_character ;
  int number_of_lines = 0;

  while (!fin.eof() ) {

    fin.get(my_character);
    if (my_character == '\n'){
      ++number_of_lines;
    } else {
      // just a test to assing some value
      my_character = 'A';
    }
  }

  cout << "NUMBER OF LINES: " << number_of_lines << endl;
}

void Initialize(Local<Object> exports) {
   NODE_SET_METHOD(exports, "countAndAssing", CountAndAssing);
}

NODE_MODULE(count, Initialize);