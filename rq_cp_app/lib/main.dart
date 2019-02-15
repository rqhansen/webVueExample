import 'package:flutter/material.dart';
import 'home/header.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
//        title: 'rq__pc',
        home: new Container(
            child: new Column(
              children: <Widget>[
                new Header()
              ],
        )));
  }
}
