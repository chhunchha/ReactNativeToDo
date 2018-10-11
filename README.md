# ReactNativeToDo
React Native App - To Do

- Install Xcode and Xcode Command Line Tools

- Setup
```
brew install node
brew install watchman
npm install -g react-native-cli
react-native run-ios

cd ToDo
react-native run-ios
```

in case you see module errors, I created an alias for below tasks 

```
echo "alias rni=\"kill \$(lsof -t -i:8081); rm -rf ios/build/; react-native run-ios\"" >> ~/.bash_profile; source ~/.bash_profile

rni
```
