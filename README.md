Alignement de représentations dans l'écosystème des calculateurs
================================================================

![Écosystème des calculateurs](https://speakerd.s3.amazonaws.com/presentations/37b48ff5944640b28703a02f3077cc91/slide_3.jpg)

Projet du hackathon [#CodeImpot](https://forum.openfisca.fr/t/guide-pratique-du-hackathon-codeimpot/42).

Ce code est celui de l'interface graphique de crowdsourcing et de consultation. L'API backend est disponible sur [`l-vincent-l/alignements_backend`](https://github.com/l-vincent-l/alignements_backend).


Objectif et vocabulaire
-----------------------

Le termes en italique sont des noms du [domaine](https://en.wikipedia.org/wiki/Domain-driven_design).

L'objectif est d'_aligner_ les _représentations_ des _notions_ disponibles dans différentes _sources_.
Les _sources_ comprennent des _représentations_ d'un ensemble de _notions_. Ces _représentations_ sont constituées d'un _identificateur_ et d'un ensemble de _descripteurs_.
Sur la base de ces _descripteurs_, des algorithmes d'_alignement_ peuvent être écrits, afin de passer d'une _représentation_ à l'autre.
Au vu de la pauvreté des _représentations_, le meilleur moyen d'_aligner_ consiste en la création d'une interface de crowdsourcing.
Cette interface pourra être par la suite améliorée par des algorithmes de filtrage qui, sur la base des _descripteurs_, suggèrent à l'utilisateur les _représentations_ les plus probables dans d'autres _sources_.

### Exemple

#### Exemple de notion

> deductions hors droits d'auteur plafonnees

#### Exemple de représentation dans la source calculette-impôts

```
{    "description": "deductions hors droits d'auteur plafonnees",    "name": "10MINS1",    "pour_formula_linecol": [      [        84,        1      ],      [        84,        41      ]    ],    "pour_formula_name": "10MINSi",    "regle_applications": [      "iliad",      "batch"    ],    "regle_linecol": [      [        74,        1      ],      [        93,        1      ]    ],    "regle_name": "813",    "source_file_name": "chap-81.m",    "tgvh_linecol": [      [        38,        1      ],      [        38,        67      ]    ],    "type": "variable_calculee"  }
```


Sources
-------

### Calculette impôt

[Source](https://git.framasoft.org/openfisca/calculette-impots-m-language-parser/blob/master/json/variables_definitions.json).

- Identificateur : nom de variable. _Exemple : `10MINS1`._
- Descripteurs :
    - nom de variable. _Exemple : `10MINS1`._
    - description. _Exemple : `deductions hors droits d'auteur plafonnees`_
    - règles d'application. _Exemple : `iliad`, `batch`_
    - `regle_name`. _Exemple : `813`_
    - `type`. _Exemple : `variable_calculee`_
    - `restituee` : s'agit-il d'une variable de sortie du calcul ou non ? Type booléen, exemple : `true`.

### Barèmes IPP sur l'IR extraits en JSON

    https://git.framasoft.org/groups/french-tax-and-benefit-tables

### OpenFisca

http://api.openfisca.fr/api/1/variables et http://api.openfisca.fr/api/1/parameters

- Identificateur : nom de variable. Ex: `rsa_forfait_logement`.
- Descripteurs :
  - label
  - pointeur vers le code
  - formule

### Loi (PLF pour 2015 / code général des impots)

#### Légifrance

[`https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000029988857`](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000029988857)

#### Loi versionnée sous Git

[`https://git.framasoft.org/etalab/codes-juridiques-francais`](https://git.framasoft.org/etalab/codes-juridiques-francais)

#### Notes

Probablement à utiliser pour sélectionner des sous-ensembles de pages web : [Web Annotation Data Model](http://www.w3.org/TR/annotation-model).


### BoFip

http://bofip.impots.gouv.fr/bofip/6430-PGP

### Brochure pratique (BP) de l'IR

http://www2.impots.gouv.fr/documentation/2015/brochure_ir/files/assets/common/downloads/publication.pdf

### service-public.fr

### Wikipedia


Exemples d'alignements
----------------------

### Alignement de la notion «seuil d'imposabilité du barème» (ou seuil de première tranche)

- Calculette : https://git.framasoft.org/openfisca/calculette-impots-m-source-code/blob/master/src/tgvH.m#L6515
- IPP : https://git.framasoft.org/french-tax-and-benefit-tables/ipp-tax-and-benefit-tables-yaml-clean/blob/master/baremes-ipp-impot-revenu-income-tax/bareme-ir.yaml#L48
- Loi : article 197 du CGI, alinéa 1, chaine de caractères  https://www.legifrance.gouv.fr/affichCodeArticle.do;jsessionid=FEEF9AEE15D2086C52CA9475DB4179D0.tpdila10v_1?idArticle=LEGIARTI000030021309&cidTexte=LEGITEXT000006069577&categorieLien=id&dateTexte=20151231
 - Loi sous git : https://git.framasoft.org/etalab/codes-juridiques-francais/blob/master/codes-en-vigueur/code-general-des-impots-cgi/livre-premier/premiere-partie/titre-premier/chapitre-premier/section-v/ii/article-197.md
- BoFip: ligne 1, colonne 1 du tableau http://bofip.impots.gouv.fr/bofip/2491-PGP.html
- BP : calcul de l'impot tab. 8 p. 312 col. 1 ligne 1. http://www2.impots.gouv.fr/documentation/2015/brochure_ir/files/assets/common/downloads/publication.pdf#P314
- service public (il y a liens url vers Legifrance et Bofip) : ligne 1, colonne 1 du tableau : https://www.service-public.fr/particuliers/vosdroits/F1419
- wikipedia : ligne 1, colonne 1 du tableau  section 2 https://fr.wikipedia.org/wiki/Bar%C3%A8mes_de_l%27imp%C3%B4t_sur_le_revenu_en_France#Bar.C3.A8me_en_vigueur


### Revenu imposable (sur feuille d'imposition)

- calculette : RNI : https://git.framasoft.org/openfisca/calculette-impots-m-source-code/blob/master/src/tgvH.m#L11443
- openfisca: http://legislation.openfisca.fr/variables/rni
- IPP : inopérant (ce n'est pas un paramètre)
- Loi: Définition générale du concept : https://www.legifrance.gouv.fr/affichCode.do;jsessionid=ED20EF02810164F5490932256004E295.tpdila10v_1?idSectionTA=LEGISCTA000006179571&cidTexte=LEGITEXT000006069577&dateTexte=20160401
- BoFip : éléments du revenu imposable (listes d'articles de loi) : http://bofip.impots.gouv.fr/bofip/6651-PGP
- BP : multiples références (33), 'revenu net imposable' correspondant à la variable et a moins de références (9) à la page 312 pour le calcul de l'impot
http://www2.impots.gouv.fr/documentation/2015/brochure_ir/files/assets/common/downloads/publication.pdf#P314
- SP : revenus à déclarer (liste de notions) : https://www.service-public.fr/particuliers/vosdroits/F1225
- wikipedia : description du concept https://fr.wikipedia.org/wiki/Imp%C3%B4t_sur_le_revenu_(France)#Revenu_imposable

### Montant des avantages fiscaux avant plafonnement

- calculette : variable https://git.framasoft.org/openfisca/calculette-impots-m-source-code/blob/master/src/tgvH.m#L1095
- IPP : sans objet car variable, les paramètres reliés sont https://git.framasoft.org/french-tax-and-benefit-tables/ipp-tax-and-benefit-tables-yaml-clean/blob/master/baremes-ipp-impot-revenu-income-tax/plaf-nich.yaml
- Loi: article du CGI avec plusieurs alinéa https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000026948362&cidTexte=LEGITEXT000006069577
- BoFip : liste d'articles de loi reliés http://bofip.impots.gouv.fr/bofip/7249-PGP.html?identifiant=BOI-IR-LIQ-20-20-10
- BP : paragraphe spécifique avec références législatives et descriptions : http://www2.impots.gouv.fr/documentation/2015/brochure_ir/files/assets/common/downloads/publication.pdf#P265
- SP : description du dispositif : https://www.service-public.fr/particuliers/vosdroits/F31179
- wikipedia : principe et liste des niches par description https://fr.wikipedia.org/wiki/Niche_fiscale#Plafonnement_des_niches_fiscales

### Nombre d'enfants à charge dans le foyer (au sens de la case F pour le quotient familial)

- calculette : alias d'une variable https://git.framasoft.org/openfisca/calculette-impots-m-source-code/blob/master/src/tgvH.m#L14334
- Loi: calcul du nombre de parts https://www.legifrance.gouv.fr/affichCode.do?idSectionTA=LEGISCTA000006179577&cidTexte=LEGITEXT000006069577
- BoFip : deux pages avec explications et liens vers articles de loi
http://bofip.impots.gouv.fr/bofip/2229-PGP.html?identifiant=BOI-IR-LIQ-10-10
http://bofip.impots.gouv.fr/bofip/2231-PGP.html?identifiant=BOI-IR-LIQ-10-10-10
- BP :
  - définition de la case dans la déclaration 2042 et lien vers la page explicative : http://www2.impots.gouv.fr/documentation/2015/brochure_ir/files/assets/common/downloads/publication.pdf#P8
  - page explicative avec références législatives http://www2.impots.gouv.fr/documentation/2015/brochure_ir/files/assets/common/downloads/publication.pdf#P65
- wikipedia : description floue du foyer fiscal https://fr.wikipedia.org/wiki/Foyer_fiscal

Revenus d'activités déclarés du premier déclarant (salaires)

- calculette : variable de la case fiscale via l'alias 1AJ https://git.framasoft.org/openfisca/calculette-impots-m-source-code/blob/master/src/tgvH.m#L13637
- IPP : sans objet car non paramètres mais paramètres reliés : https://git.framasoft.org/french-tax-and-benefit-tables/ipp-tax-and-benefit-tables-yaml-clean/blob/master/baremes-ipp-impot-revenu-income-tax/exo-ir.yaml
- Loi: art. CGI définition du revenu imposable : https://www.legifrance.gouv.fr/affichCodeArticle.do;jsessionid=3CD659A8AE567ED131E9DBB00E89DA5A.tpdila10v_1?idArticle=LEGIARTI000006302195&cidTexte=LEGITEXT000006069577&dateTexte=19831009
- BoFip : inclusion dans les différents revenus déclarés : http://bofip.impots.gouv.fr/bofip/1323-PGP
- BP : (case 1AJ)
définition de la case dans la déclaration 2042 et lien vers la page explicative: http://www2.impots.gouv.fr/documentation/2015/brochure_ir/files/assets/common/downloads/publication.pdf#P9
page explicative avec références législatives http://www2.impots.gouv.fr/documentation/2015/brochure_ir/files/assets/common/downloads/publication.pdf#P72
- SP : descriptif du revenu imposable et salaires à déclarer : https://www.service-public.fr/particuliers/vosdroits/F1225
- wikipedia : descriptif des traitements et salaires imposables https://fr.wikipedia.org/wiki/Imp%C3%B4t_sur_le_revenu_(France)#Traitements_et_salaires_imposables
