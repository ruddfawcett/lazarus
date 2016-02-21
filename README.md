lazarus
===
An aggregate news source API, with articles from *The New York Times*, *The Guardian*, and *The International Herald Tribune*.  *USA Today* will be added when the development portal reopens.  *Associated Press (AP)* support is also being considered.

Lazarus is part of **The Poetry Project**, which encourages people to write, read and discuss poetry written by them.  This particular tool is named after Emma Lazarus, an American poet.

> Emma Lazarus (July 22, 1849 – November 19, 1887) was an American poet born in New York City.  She is best known for "The New Colossus", a sonnet written in 1883; its lines appear inscribed on a bronze plaque in the pedestal of the Statue of Liberty installed in 1903, a decade and a half after Lazarus's death. -- [Wikipedia](https://en.wikipedia.org/wiki/Emma_Lazarus)

## Getting Started
To run your own version of lazarus, register for a [*New York Times* API Key](http://developers.nytimes.com/), and a [*Guardian* API Key](http://open-platform.theguardian.com/).  When you register for your *New York Times* API Key, make sure to select the "Times Newswire API," as this is the specific key we need.  The *Guardian* API Key is universal in functionality.

After you have registered for both services, you can then either use them as command line arguments when starting from a shell, or you can add them to a `lib/keys.js` file.  For the latter, simply clone [`lib/keys.sample.js`](lib/keys.sample.js) to `lib/keys.js`, and add your keys.  You will need an empty `lib/keys.js` file even if you don't use it, or else you will get an error.

## API
The root path for the API is `/api/v1/articles/{source}`, and all responses are in JSON.  All requests should be GET requests.

### Sources
The API currently supports the following sources:
- *The New York Times* — `nytimes`
- *The Guardian* — `guardian`
- *The International Herald Tribune* — `iht`

### Routes
Currently, the API is limited to 10 articles per source, as the main purpose is to shuffle articles across many sources.  That being said, however, you can access a list of articles from a single source (10), or a list of shuffled articles from all sources (30).

- `/shuffled` — A list of 30 articles randomly shuffled from the sources.
- `/{source}` — 10 articles from that source.

### JSON Spec
The API returns an array of dictionaries.  Each article conforms to the following specification.
```json
{
  "title": "Example Headline",
  "url": "http://example.com/2016/02/21/some-story",
  "byline": "By JOHN DOE and JANE DOE",
  "source": "source",
  "published_date": "2016-02-21"
}

```

## Credits
**The Poetry Project**, and all associated [tools on GitHub](https://github.com/thepoetryproject), are owned and maintained by [Rudd Fawcett](https://github.com/ruddfawcett). You can follow him on Twitter at [@ruddfawcett](https://twitter.com/ruddfawcett).

## License
lazarus is available under the MIT license. See the LICENSE file for more info.
