# Glossary


This page explains all of the terms that are used on this platform.
Before we get started, some terms need to be discussed to get a proper idea of what is happening.
First, let's get started with the users of the platform: workers and requesters

### EFX

### Workers
Workers are the engine of the Effect Network. They are the human intelligence in the backend that they do the tasks. The tasks are presented to them in templates. Ideally, the tasks are designed in such a way that they can be done within minutes.

### Requesters
Requesters submit tasks to the platform via templates for workers to work on. 

## Force
Force is the frontend provided by Effect Network for workers to work on campaigns and tasks.

## Templates
Templates designs that are used to submit tasks to the platform. They are HTML such as the folowing:
```html
<div>
  <image src='` + '${image_url}' + `'></image>
  <h2>What do you see in the picture above? 🐸</h2>
  <input type='radio' name='radio-answer' id="original" label=''>Stars 🤩</input><br>
  <input type='radio' name='radio-answer' id="original" label=''>Mechanical Turk 😏</input><br>
  <input type='radio' name='radio-answer' id="original" label=''>Dog 🤐</input> <br>
  <input type='radio' name='radio-answer' id="original" label=''>Cat 😵</input><br>
  <hr>
  <button type="submit">Submit</button> 
</div>
<script></script>
<style></style>
```
Templates have placeholder variables that are replaced with the actual values when the task is worked on by a worker. They are filled in with a value that is passed with the creation of a new batch.
## Campaigns
Campaigns are the overarching structure that holds tasks from each requester. Campaigns are created by requesters and are worked on by the workers. When all of the tasks in a campaign are completed, the campaign is marked as completed until new tasks are uploaded to the platform. 

## Tasks
A task is the unit of work that is done by each worker. The tasks are the filled-in templates that are submitted to the platform.
## Batches
Batches are submitted to the platform in the form of batches. Each time a batch is submitted, a new task is created from the data that is supplied with the batch.

## IPFS
The interplanetary file system is used in order to upload data to the cloud. For the time being, this is the data storage mechanism that is used.
## Blockchain
Currently, two blockchains are supported. The eos blockchain and Binance smart chain. Data is not stored on the blockchains
### EOS
The main blockchain that is used on this platform. Most of the mechanisms in place are done via the eos blockchain. 
### BSC
BSC is used to make it easier for users to interact with the platform.
