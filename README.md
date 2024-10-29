# Ortlin

Ortlin is a web-based graphical user interface for interacting with OpenAI
models and APIs.

<a href="https://youtu.be/Fq5LTRUmMQA">
  <img src="https://github.com/user-attachments/assets/c749d89d-8f30-42a7-a8d4-4cca20ed06df" width="756" />
</a>

<hr />

Hello there! 👋

Are you excited to explore OpenAI's powerful models but don't know where to
begin? 🤔

If you're non-technical, the problem is clear: OpenAI doesn't provide a
user-friendly interface to try out their HTTP APIs. 😔

While several interfaces exist, most are just clones of ChatGPT, allowing you to
generate text-based content from prompts. But what about OpenAI’s other
incredible models like DALL-E for image generation or TTS for natural-sounding
speech? Sadly, without technical skills, experimenting with these becomes
difficult. 😢

That’s where Ortlin comes in! 🚀 🎉

Ortiln is a web-based, user-friendly interface designed to help anyone—technical
or non-technical—interact with OpenAI’s APIs and underlying models with ease.
And the best part? It’s completely free and open-source! 😍

No more barriers—Ortlin puts the power of OpenAI in your hands! 🎉 🔥

<hr />

### Try it out

👨‍💻 Try the live interface at
[ortlin.openuseai.com](https://ortlin.openuseai.com) to experience it yourself.

### Product Hunt

🚀 Find it on [Product Hunt](https://www.producthunt.com/posts/ortlin)

### Installation

1. Install Deno by following the official
   [installation guide](https://docs.deno.com/runtime/getting_started/installation/#download-and-install).

2. Clone this repository

```sh
git clone https://github.com/ortlin/ortlin.git
cd ortlin
```

3. Generate an `app key` to encrypt and securely store your OpenAI API key in
   your browser.

```sh
deno task key:generate
```

4. Start the project

```sh
deno task start
```

### Docker

For your convenience, we've created a Docker image available on
[Docker Hub](https://hub.docker.com/r/renjithspace/ortlin). You can easily
install Ortlin on your local machine or server using Docker by following these
steps.

1. Pull the image

```sh
docker pull renjithspace/ortlin:latest
```

2. Run the container

```sh
docker run -d --name ortlin -t -i -p 8000:8000 renjithspace/ortlin:latest
```
