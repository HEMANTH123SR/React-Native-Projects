/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Button, Rating} from 'react-native-elements';

const FeedbackApp = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);

  const handleFeedbackSubmit = () => {
    // Replace this with your feedback submission logic, e.g., API call or storage implementation
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Rating:', rating);
    // Reset form after submission
    setTitle('');
    setDescription('');
    setRating(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Feedback Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
        placeholder="Enter feedback title"
      />

      <Text style={styles.label}>Feedback Description:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={text => setDescription(text)}
        placeholder="Enter feedback description"
        multiline
      />

      <Text style={styles.label}>Rating:</Text>
      <Rating
        type="star"
        fractions={1}
        startingValue={rating}
        imageSize={30}
        onFinishRating={setRating}
      />

      <Button
        title="Submit Feedback"
        onPress={handleFeedbackSubmit}
        disabled={!title || !description || rating === 0}
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: 'blue',
  },
  containerApp: {
    flex: 1,
    justifyContent: 'center',
  },
});

const Ai = () => {
  return (
    <View style={styles.containerApp}>
      <FeedbackApp />
    </View>
  );
};

export default Ai;
