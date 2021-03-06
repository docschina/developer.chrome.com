---
layout: 'layouts/doc-post.njk'
title: 'プライバシーバジェット'
subhead: >
  サイトに公開される個々のユーザーデータの量を制限し、隠されたトラッキングを防止します。
description: >
  サイトに公開される個々のユーザーデータの量を制限し、隠されたトラッキングを防止します。
date: 2022-03-04
authors:
  - alexandrawhite
---

## 実装状況

このドキュメントでは、隠されたトラッキングを防止する新しいプライバシーバジェットという提案の概要を説明します。

*  [プライバシーバジェット提案](https://github.com/bslassey/privacy-budget)の[公開 ディスカッション](https://github.com/bslassey/privacy-budget/issues)が始まりました。
*  プライバシーバジェットはまだどのブラウザにも実装されていません。
*  [プライバシーサンドボックスのタイムライン](https://privacysandbox.com/open-web/#the-privacy-sandbox-timeline)には、プライバシーバジェットとプライバシーサンドボックスのその他の提案の実装時期に関する情報が提供されています。

## この提案が必要な理由

ブラウザにおける Cookie の処理方法が変化し続ける中、一部のユーザー追跡に関する取り組みは、Cookie による制御を打ち破る、検出が困難な方法へと移行しています。 これらの方法は、 _フィンガープリンティング_ と呼ばれ、特殊なブラウザを判定する、ユーザーが知ることのないさまざまな手法を使用しています。

{% Aside 'key-term' %}
_フィンガープリンティングサーフェス_ は、ウェブサイトが特定のユーザー（ネットワーク ID やユーザー言語など）またはデバイス（特定のデバイスモデルなど）に関する情報を得られる対話ポイントを指します。 このデータは JavaScript API によって返されることがあります。

フィンガープリンティングサーフェスは、他の情報源と組み合わさった場合に、プライバシーの大問題となります。これは、時間の経過とともにユーザーの秘密特定につながる可能性があるためです。
{% endAside %}

プライバシーバジェットの提案では、サイトに公開できる個々のユーザーデータの量に制限を設けることで、個人を追跡して特定するには総合的にも不十分となるようにすることを提案しています。 これには、ユーザーがサードパーティと共有する量を定量化する必要があります。これは、次の方法で決定できます。

*  [K-匿名性](https://en.wikipedia.org/wiki/K-anonymity): 匿名化されたデータが所有するプロパティ。ここで、「k」は同じ情報を持つ他のユーザーの数です。
*  [エントロピー](https://en.wikipedia.org/wiki/Entropy_(information_theory)): 情報理論。応用すると、データの潜在的な限界に内在する不確実さの程度があることを説明します。
*  [差分プライバシー](https://en.wikipedia.org/wiki/Differential_privacy): 一セットの集合データで 1 つの個別データを特定できないようにするシステムです。

各ユーザーについて明らかにされる情報量の最大許容が、プライバシーバジェットということになります。 サイトで利用できるフィンガープリンティングサーフェスが少なく、露呈される情報の粒度が低いほど、1 人のユーザーを識別できる可能性が低くなります。

### フィンガープリンティングデータを測定する

プライバシーバジェットの提案の成功は、ブラウザが各フィンガープリンティングサーフェスによって明らかにされる情報量を推定することに依存しているほか、  サイトに公開される情報の合計量を測定する必要もあります。 これらの測定値を 1 つのサービスに報告することが必要です。

このデータの測定方法には潜在的なものがいくつかあり、Chrome は積極的にソリューションを模索しています。

### サイトに公開される情報の合計量を削減する

ウェブ全体で情報量の合計が測定されたら、公開された API サーフェスを分析して、必要な情報と共有する必要のない情報に優先順位を付けることになります。

プライバシーバジェットの計算では、パッシブフィンガープリンティングによって明らかにされたデータは、サイトが使用するものだと想定されます。 [User-Agent の削減](/docs/privacy-sandbox/user-agent/)で実現したり、[Gnatcatcher](/docs/privacy-sandbox/gnatcatcher/) で提案されているとおり、パッシブフィンガープリンティングサーフェスを縮小することが重要です。

## プライバシーバジェットの実施方法

平均的なサイトが妥当な量のデータにアクセスすると、ブラウザによって意味のあるバジェットが適用されます。 プライバシーバジェットの提案は、設定されたデータしきい値を超えると、バジェットをさまざまな方法で適用できることを提案しています。 たとえば、次のような方法が挙げられます。

*  バジェットに違反する API 呼び出しでエラーを引き起こす。
*  可能であれば、API 呼び出しは、ノイズ付きの結果や単一のユーザーに関連付けられていない汎用的な結果を返すプライバシー保護呼び出しに置き換える。
*  ストレージとネットワークの要求を拒否し、サイトが新しい情報を盗み出せないようにする。

### バジェットの例外

3D ゲームやビデオ会議といった一部のアプリケーションは、妥当なプライバシーバジェット内で実行できない可能性があります。 ユーザーに対する権限プロンプトを使用するなど、それらのアプリケーションを実行できるようにするためのオプションをいくつか用意しています。 こういった例外がどのように処理されるかについては、意見を募集しています。

## プライバシーバジェットの提供開始時期

幅広く使用できるようなるのは、最短で、プライベートバジェットを適用できるようになる日で、 これは 2024 年以降になる予定です。

現時点では、プライバシーバジェットは提案であり、どのブラウザにも実装されていません。

## 貢献とフィードバックの共有

プライバシーバジェットの提案は現在も検討中であるため、今後変更される可能性があります。

*  **GitHub**: [提案](https://github.com/bslassey/privacy-budget)を読み、[質問を投稿したり、ディスカッションに参加](https://github.com/bslassey/privacy-budget/issues)したりできます。
*  **開発者サポート**: [Privacy Sandbox Developer Support リポジトリ](https://github.com/GoogleChromeLabs/privacy-sandbox-dev-support)では、質問したり、ディスカッションに参加したりできます。
