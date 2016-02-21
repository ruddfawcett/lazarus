lazarus
===
An aggregate news source API, with articles from *The New York Times*, *The Guardian*, and *The International Herald Tribune*.  *USA Today* will be added when the development portal reopens.  *Associated Press (AP)* support is also being considered.

Lazarus is part of **The Poetry Project**, which encourages people to write, read and discuss poetry written by them.  This particular tool is named after Emma Lazarus, an American poet.

> Emma Lazarus (July 22, 1849 – November 19, 1887) was an American poet born in New York City.  She is best known for "The New Colossus", a sonnet written in 1883; its lines appear inscribed on a bronze plaque in the pedestal of the Statue of Liberty installed in 1903, a decade and a half after Lazarus's death. -- [Wikipedia](https://en.wikipedia.org/wiki/Emma_Lazarus)

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
