import { Injectable } from '@angular/core';
import { Word } from '../word.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DataGameService {

	private static wordsforLearningLSKey: string = 'wordsforLearning';

	public words: Word[] = [
		{
			id: '2',
			russianWord: 'передовой',
			englishWord: 'advanced',
		},
		{
			id: '3',
			russianWord: 'спутанный',
			englishWord: 'confused'
		},
		{
			id: '4',
			russianWord: 'управляемый',
			englishWord: 'controlled'
		},
		{
			id: '5',
			russianWord: 'изогнутый',
			englishWord: 'curved'
		},
		{
			id: '6',
			russianWord: 'занято',
			englishWord: 'engaged'
		},
		{
			id: '7',
			russianWord: 'возбужденный',
			englishWord: 'excited'
		},
		{
			id: '8',
			russianWord: 'немедленный',
			englishWord: 'immediate'
		},
		{
			id: '9',
			russianWord: 'зараженный',
			englishWord: 'infected'
		},
		{
			id: '10',
			russianWord: 'ингредиент',
			englishWord: 'ingredient'
		},
		{
			id: '11',
			russianWord: 'пострадавший',
			englishWord: 'injured'
		},
		{
			id: '12',
			russianWord: 'заинтересованный',
			englishWord: 'interested'
		},
		{
			id: '13',
			russianWord: 'вязаный',
			englishWord: 'knitted'
		},
		{
			id: '14',
			russianWord: 'женат',
			englishWord: 'married'
		},
		{
			id: '16',
			russianWord: 'средний',
			englishWord: 'medium'
		},
		{
			id: '17',
			russianWord: 'смешанный',
			englishWord: 'mixed'
		},
		{
			id: '18',
			russianWord: 'голый',
			englishWord: 'naked'
		},
		{
			id: '19',
			russianWord: 'необходимость',
			englishWord: 'need'
		},
		{
			id: '20',
			russianWord: 'игла',
			englishWord: 'needle'
		},
		{
			id: '21',
			russianWord: 'занятый',
			englishWord: 'occupied'
		},
		{
			id: '24',
			russianWord: 'переполненный',
			englishWord: 'crowded'
		},
		{
			id: '25',
			russianWord: 'угнетенный',
			englishWord: 'depressed'
		},
		{
			id: '26',
			russianWord: 'пустынный',
			englishWord: 'deserted'
		},
		{
			id: '27',
			russianWord: 'подробный',
			englishWord: 'detailed'
		},
		{
			id: '28',
			russianWord: 'определяется',
			englishWord: 'determined'
		},
		{
			id: '29',
			russianWord: 'посвященный',
			englishWord: 'devoted'
		},
		{
			id: '30',
			russianWord: 'инвалид',
			englishWord: 'disabled'
		},
		{
			id: '31',
			russianWord: 'разочарованный',
			englishWord: 'disappointed'
		},
		{
			id: '32',
			russianWord: 'противно',
			englishWord: 'disgusted'
		},
		{
			id: '33',
			russianWord: 'разведенный',
			englishWord: 'divorced'
		},
		{
			id: '34',
			russianWord: 'одетый',
			englishWord: 'dressed'
		},
		{
			id: '35',
			russianWord: 'край',
			englishWord: 'edge'
		},
		{
			id: '36',
			russianWord: 'издание',
			englishWord: 'edition'
		},
		{
			id: '37',
			russianWord: 'редактор',
			englishWord: 'editor'
		},
		{
			id: '38',
			russianWord: 'воспитывать',
			englishWord: 'educate'
		},
		{
			id: '39',
			russianWord: 'образование',
			englishWord: 'education'
		},
		{
			id: '40',
			russianWord: 'смущенный',
			englishWord: 'embarrassed'
		},
		{
			id: '41',
			russianWord: 'федеральный',
			englishWord: 'federal'
		},
		{
			id: '42',
			russianWord: 'кормить',
			englishWord: 'feed'
		},
		{
			id: '43',
			russianWord: 'беспокоило',
			englishWord: 'worried'
		},
		{
			id: '44',
			russianWord: 'рассчитывать на',
			englishWord: 'rely on'
		},
		{
			id: '45',
			russianWord: 'из-за',
			englishWord: 'because of'
		},
		{
			id: '46',
			russianWord: 'немного',
			englishWord: 'a bit'
		},
		{
			id: '47',
			russianWord: 'несколько',
			englishWord: 'a few'
		},
		{
			id: '48',
			russianWord: 'отказываться от',
			englishWord: 'abandon'
		},
		{
			id: '49',
			russianWord: 'способность',
			englishWord: 'ability'
		},
		{
			id: '50',
			russianWord: 'в состоянии',
			englishWord: 'able'
		},
		{
			id: '51',
			russianWord: 'о',
			englishWord: 'about'
		},
		{
			id: '52',
			russianWord: 'выше',
			englishWord: 'above'
		},
		{
			id: '53',
			russianWord: 'за границей',
			englishWord: 'abroad'
		},
		{
			id: '54',
			russianWord: 'отсутствие',
			englishWord: 'absence'
		},
		{
			id: '55',
			russianWord: 'отсутствовать',
			englishWord: 'absent'
		},
		{
			id: '56',
			russianWord: 'абсолютный',
			englishWord: 'absolute'
		},
		{
			id: '57',
			russianWord: 'поглощать',
			englishWord: 'absorb'
		},
		{
			id: '58',
			russianWord: 'злоупотребление',
			englishWord: 'abuse'
		},
		{
			id: '59',
			russianWord: 'учебный',
			englishWord: 'academic'
		},
		{
			id: '60',
			russianWord: 'акцент',
			englishWord: 'accent'
		},
		{
			id: '61',
			russianWord: 'приемлемый',
			englishWord: 'acceptable'
		},
		{
			id: '62',
			russianWord: 'доступ',
			englishWord: 'access'
		},
		{
			id: '63',
			russianWord: 'несчастный случай',
			englishWord: 'accident'
		},
		{
			id: '64',
			russianWord: 'дополнительный',
			englishWord: 'additional'
		},
		{
			id: '65',
			russianWord: 'адрес',
			englishWord: 'address'
		},
		{
			id: '66',
			russianWord: 'адекватный',
			englishWord: 'adequate'
		},
		{
			id: '67',
			russianWord: 'регулировать',
			englishWord: 'adjust'
		},
		{
			id: '68',
			russianWord: 'восхищение',
			englishWord: 'admiration'
		},
		{
			id: '69',
			russianWord: 'восхищаться',
			englishWord: 'admire'
		},
		{
			id: '70',
			russianWord: 'признавать',
			englishWord: 'admit'
		},
		{
			id: '71',
			russianWord: 'принимать',
			englishWord: 'adopt'
		},
		{
			id: '72',
			russianWord: 'для взрослых',
			englishWord: 'adult'
		},
		{
			id: '73',
			russianWord: 'продвижение',
			englishWord: 'advance'
		},
		{
			id: '74',
			russianWord: 'преимущество',
			englishWord: 'advantage'
		},
		{
			id: '75',
			russianWord: 'приключение',
			englishWord: 'adventure'
		},
		{
			id: '76',
			russianWord: 'рекламировать',
			englishWord: 'advertise'
		},
		{
			id: '77',
			russianWord: 'реклама',
			englishWord: 'advertisement'
		},
		{
			id: '78',
			russianWord: 'реклама',
			englishWord: 'advertising'
		},
		{
			id: '79',
			russianWord: 'совет',
			englishWord: 'advice'
		},
		{
			id: '80',
			russianWord: 'консультировать',
			englishWord: 'advise'
		},
		{
			id: '81',
			russianWord: 'дело',
			englishWord: 'affair'
		},
		{
			id: '82',
			russianWord: 'влиять на',
			englishWord: 'affect'
		},
		{
			id: '83',
			russianWord: 'любовь',
			englishWord: 'affection'
		},
		{
			id: '84',
			russianWord: 'оказывать',
			englishWord: 'afford'
		},
		{
			id: '85',
			russianWord: 'живой',
			englishWord: 'alive'
		},
		{
			id: '86',
			russianWord: 'все',
			englishWord: 'all'
		},
		{
			id: '87',
			russianWord: 'все в порядке',
			englishWord: 'all right'
		},
		{
			id: '88',
			russianWord: 'позволять',
			englishWord: 'allow'
		},
		{
			id: '89',
			russianWord: 'почти',
			englishWord: 'almost'
		},
		{
			id: '90',
			russianWord: 'только',
			englishWord: 'alone'
		},
		{
			id: '91',
			russianWord: 'по',
			englishWord: 'along'
		},
		{
			id: '92',
			russianWord: 'рядом',
			englishWord: 'alongside'
		},
		{
			id: '93',
			russianWord: 'вслух',
			englishWord: 'aloud'
		},
		{
			id: '94',
			russianWord: 'алфавит',
			englishWord: 'alphabet'
		},
		{
			id: '95',
			russianWord: 'алфавитный',
			englishWord: 'alphabetical'
		},
		{
			id: '96',
			russianWord: 'уже',
			englishWord: 'already'
		},
		{
			id: '97',
			russianWord: 'также',
			englishWord: 'also'
		},
		{
			id: '98',
			russianWord: 'изменять',
			englishWord: 'alter'
		},
		{
			id: '99',
			russianWord: 'альтернатива',
			englishWord: 'alternative'
		},
		{
			id: '100',
			russianWord: 'хотя',
			englishWord: 'although'
		},
		{
			id: '101',
			russianWord: 'всего',
			englishWord: 'altogether'
		},
		{
			id: '102',
			russianWord: 'всегда',
			englishWord: 'always'
		},
		{
			id: '103',
			russianWord: 'удивлять',
			englishWord: 'amaze'
		},
		{
			id: '104',
			russianWord: 'удивительный',
			englishWord: 'amazing'
		},
		{
			id: '105',
			russianWord: 'честолюбие',
			englishWord: 'ambition'
		},
		{
			id: '106',
			russianWord: 'тревога',
			englishWord: 'anxiety'
		},
		{
			id: '107',
			russianWord: 'тревожный',
			englishWord: 'anxious'
		},
		{
			id: '108',
			russianWord: 'тревожно',
			englishWord: 'anxiously'
		},
		{
			id: '109',
			russianWord: 'кто-нибудь',
			englishWord: 'anyone'
		},
		{
			id: '110',
			russianWord: 'что-нибудь',
			englishWord: 'anything'
		},
		{
			id: '111',
			russianWord: 'в любом случае',
			englishWord: 'anyway'
		},
		{
			id: '112',
			russianWord: 'везде',
			englishWord: 'anywhere'
		},
		{
			id: '113',
			russianWord: 'кроме',
			englishWord: 'apart'
		},
		{
			id: '114',
			russianWord: 'квартира',
			englishWord: 'apartment'
		},
		{
			id: '115',
			russianWord: 'извиняться',
			englishWord: 'apologize'
		},
		{
			id: '116',
			russianWord: 'видимый',
			englishWord: 'apparent'
		},
		{
			id: '117',
			russianWord: 'по-видимому',
			englishWord: 'apparently'
		},
		{
			id: '118',
			russianWord: 'призыв',
			englishWord: 'appeal'
		},
		{
			id: '119',
			russianWord: 'появляться',
			englishWord: 'appear'
		},
		{
			id: '120',
			russianWord: 'внешний вид',
			englishWord: 'appearance'
		},
		{
			id: '121',
			russianWord: 'яблоко',
			englishWord: 'apple'
		},
		{
			id: '122',
			russianWord: 'применение',
			englishWord: 'application'
		},
		{
			id: '123',
			russianWord: 'применять',
			englishWord: 'apply'
		},
		{
			id: '124',
			russianWord: 'назначать',
			englishWord: 'appoint'
		},
		{
			id: '125',
			russianWord: 'назначение',
			englishWord: 'appointment'
		},
		{
			id: '126',
			russianWord: 'ценить',
			englishWord: 'appreciate'
		},
		{
			id: '127',
			russianWord: 'искусственный',
			englishWord: 'artificial'
		},
		{
			id: '128',
			russianWord: 'художник',
			englishWord: 'artist'
		},
		{
			id: '129',
			russianWord: 'художественный',
			englishWord: 'artistic'
		},
		{
			id: '130',
			russianWord: 'в сторону',
			englishWord: 'aside'
		},
		{
			id: '131',
			russianWord: 'просить',
			englishWord: 'ask'
		},
		{
			id: '132',
			russianWord: 'спящий',
			englishWord: 'asleep'
		},
		{
			id: '133',
			russianWord: 'аспект',
			englishWord: 'aspect'
		},
		{
			id: '134',
			russianWord: 'помощь',
			englishWord: 'assist'
		},
		{
			id: '135',
			russianWord: 'помощь',
			englishWord: 'assistance'
		},
		{
			id: '136',
			russianWord: 'помощник',
			englishWord: 'assistant'
		},
		{
			id: '137',
			russianWord: 'ассоциированный',
			englishWord: 'associate'
		},
		{
			id: '138',
			russianWord: 'объединение',
			englishWord: 'association'
		},
		{
			id: '139',
			russianWord: 'считать',
			englishWord: 'assume'
		},
		{
			id: '140',
			russianWord: 'гарантировать',
			englishWord: 'assure'
		},
		{
			id: '141',
			russianWord: 'атмосфера',
			englishWord: 'atmosphere'
		},
		{
			id: '142',
			russianWord: 'атом',
			englishWord: 'atom'
		},
		{
			id: '143',
			russianWord: 'придавать',
			englishWord: 'attach'
		},
		{
			id: '144',
			russianWord: 'нападение',
			englishWord: 'attack'
		},
		{
			id: '145',
			russianWord: 'попытка',
			englishWord: 'attempt'
		},
		{
			id: '146',
			russianWord: 'присутствовать',
			englishWord: 'attend'
		},
		{
			id: '147',
			russianWord: 'внимание',
			englishWord: 'attention'
		},
		{
			id: '148',
			russianWord: 'неуклюжий',
			englishWord: 'awkward'
		},
		{
			id: '149',
			russianWord: 'неуклюже',
			englishWord: 'awkwardly'
		},
		{
			id: '150',
			russianWord: 'ребенок',
			englishWord: 'baby'
		},
		{
			id: '151',
			russianWord: 'назад',
			englishWord: 'back'
		},
		{
			id: '152',
			russianWord: 'фон',
			englishWord: 'background'
		},
		{
			id: '153',
			russianWord: 'назад',
			englishWord: 'backward'
		},
		{
			id: '154',
			russianWord: 'бактерии',
			englishWord: 'bacteria'
		},
		{
			id: '155',
			russianWord: 'плохой',
			englishWord: 'bad'
		},
		{
			id: '156',
			russianWord: 'плохо',
			englishWord: 'badly'
		},
		{
			id: '157',
			russianWord: 'мешок',
			englishWord: 'bag'
		},
		{
			id: '158',
			russianWord: 'багаж',
			englishWord: 'baggage'
		},
		{
			id: '159',
			russianWord: 'испечь',
			englishWord: 'bake'
		},
		{
			id: '160',
			russianWord: 'баланс',
			englishWord: 'balance'
		},
		{
			id: '161',
			russianWord: 'мяч',
			englishWord: 'ball'
		},
		{
			id: '162',
			russianWord: 'полоса',
			englishWord: 'band'
		},
		{
			id: '163',
			russianWord: 'бинт',
			englishWord: 'bandage'
		},
		{
			id: '164',
			russianWord: 'банк',
			englishWord: 'bank'
		},
		{
			id: '165',
			russianWord: 'бар',
			englishWord: 'bar'
		},
		{
			id: '166',
			russianWord: 'торговаться',
			englishWord: 'bargain'
		},
		{
			id: '167',
			russianWord: 'барьер',
			englishWord: 'barrier'
		},
		{
			id: '168',
			russianWord: 'база',
			englishWord: 'base'
		},
		{
			id: '169',
			russianWord: 'интерес',
			englishWord: 'behalf'
		},
		{
			id: '170',
			russianWord: 'вести себя',
			englishWord: 'behave'
		},
		{
			id: '171',
			russianWord: 'поведение',
			englishWord: 'behaviour'
		},
		{
			id: '172',
			russianWord: 'за',
			englishWord: 'behind'
		},
		{
			id: '173',
			russianWord: 'вера',
			englishWord: 'belief'
		},
		{
			id: '174',
			russianWord: 'верить',
			englishWord: 'believe'
		},
		{
			id: '175',
			russianWord: 'колокол',
			englishWord: 'bell'
		},
		{
			id: '176',
			russianWord: 'принадлежать',
			englishWord: 'belong'
		},
		{
			id: '177',
			russianWord: 'ниже',
			englishWord: 'below'
		},
		{
			id: '178',
			russianWord: 'ремень',
			englishWord: 'belt'
		},
		{
			id: '179',
			russianWord: 'изгиб',
			englishWord: 'bend'
		},
		{
			id: '180',
			russianWord: 'под',
			englishWord: 'beneath'
		},
		{
			id: '181',
			russianWord: 'пособие',
			englishWord: 'benefit'
		},
		{
			id: '182',
			russianWord: 'изогнутый',
			englishWord: 'bent'
		},
		{
			id: '183',
			russianWord: 'рядом с',
			englishWord: 'beside'
		},
		{
			id: '184',
			russianWord: 'ставка',
			englishWord: 'bet'
		},
		{
			id: '185',
			russianWord: 'лучше',
			englishWord: 'better'
		},
		{
			id: '186',
			russianWord: 'пари',
			englishWord: 'betting'
		},
		{
			id: '187',
			russianWord: 'между',
			englishWord: 'between'
		},
		{
			id: '188',
			russianWord: 'за',
			englishWord: 'beyond'
		},
		{
			id: '189',
			russianWord: 'велосипед',
			englishWord: 'bicycle'
		},
		{
			id: '190',
			russianWord: 'доска',
			englishWord: 'board'
		},
		{
			id: '191',
			russianWord: 'лодка',
			englishWord: 'boat'
		},
		{
			id: '192',
			russianWord: 'тело',
			englishWord: 'body'
		},
		{
			id: '193',
			russianWord: 'кипятить',
			englishWord: 'boil'
		},
		{
			id: '194',
			russianWord: 'бомба',
			englishWord: 'bomb'
		},
		{
			id: '195',
			russianWord: 'кость',
			englishWord: 'bone'
		},
		{
			id: '196',
			russianWord: 'книга',
			englishWord: 'book'
		},
		{
			id: '197',
			russianWord: 'ботинок',
			englishWord: 'boot'
		},
		{
			id: '198',
			russianWord: 'граница',
			englishWord: 'border'
		},
		{
			id: '199',
			russianWord: 'отверстие',
			englishWord: 'bore'
		},
		{
			id: '200',
			russianWord: 'скучный',
			englishWord: 'boring'
		},
		{
			id: '201',
			russianWord: 'занимать',
			englishWord: 'borrow'
		},
		{
			id: '202',
			russianWord: 'босс',
			englishWord: 'boss'
		},
		{
			id: '203',
			russianWord: 'оба',
			englishWord: 'both'
		},
		{
			id: '204',
			russianWord: 'беспокоить',
			englishWord: 'bother'
		},
		{
			id: '205',
			russianWord: 'бутылка',
			englishWord: 'bottle'
		},
		{
			id: '206',
			russianWord: 'дно',
			englishWord: 'bottom'
		},
		{
			id: '207',
			russianWord: 'связанный',
			englishWord: 'bound'
		},
		{
			id: '208',
			russianWord: 'чаша',
			englishWord: 'bowl'
		},
		{
			id: '209',
			russianWord: 'ящик',
			englishWord: 'box'
		},
		{
			id: '210',
			russianWord: 'мальчик',
			englishWord: 'boy'
		},
		{
			id: '211',
			russianWord: 'передача',
			englishWord: 'broadcast'
		},
		{
			id: '212',
			russianWord: 'широко',
			englishWord: 'broadly'
		},
		{
			id: '213',
			russianWord: 'сломанный',
			englishWord: 'broken'
		},
		{
			id: '214',
			russianWord: 'брат',
			englishWord: 'brother'
		},
		{
			id: '215',
			russianWord: 'коричневый',
			englishWord: 'brown'
		},
		{
			id: '216',
			russianWord: 'кисть',
			englishWord: 'brush'
		},
		{
			id: '217',
			russianWord: 'пузырь',
			englishWord: 'bubble'
		},
		{
			id: '218',
			russianWord: 'бюджет',
			englishWord: 'budget'
		},
		{
			id: '219',
			russianWord: 'строить',
			englishWord: 'build'
		},
		{
			id: '220',
			russianWord: 'здание',
			englishWord: 'building'
		},
		{
			id: '221',
			russianWord: 'пуля',
			englishWord: 'bullet'
		},
		{
			id: '222',
			russianWord: 'связка',
			englishWord: 'bunch'
		},
		{
			id: '223',
			russianWord: 'гореть',
			englishWord: 'burn'
		},
		{
			id: '224',
			russianWord: 'взрыв',
			englishWord: 'burst'
		},
		{
			id: '225',
			russianWord: 'похоронить',
			englishWord: 'bury'
		},
		{
			id: '226',
			russianWord: 'автобус',
			englishWord: 'bus'
		},
		{
			id: '227',
			russianWord: 'куст',
			englishWord: 'bush'
		},
		{
			id: '228',
			russianWord: 'бизнес',
			englishWord: 'business'
		},
		{
			id: '229',
			russianWord: 'бизнесмен',
			englishWord: 'businessman'
		},
		{
			id: '230',
			russianWord: 'занятый',
			englishWord: 'busy'
		},
		{
			id: '231',
			russianWord: 'но',
			englishWord: 'but'
		},
		{
			id: '232',
			russianWord: 'способный',
			englishWord: 'capable'
		},
		{
			id: '233',
			russianWord: 'мощность',
			englishWord: 'capacity'
		},
		{
			id: '234',
			russianWord: 'капитал',
			englishWord: 'capital'
		},
		{
			id: '235',
			russianWord: 'капитан',
			englishWord: 'captain'
		},
		{
			id: '236',
			russianWord: 'захват',
			englishWord: 'capture'
		},
		{
			id: '237',
			russianWord: 'автомобиль',
			englishWord: 'car'
		},
		{
			id: '238',
			russianWord: 'карты',
			englishWord: 'card'
		},
		{
			id: '239',
			russianWord: 'картон',
			englishWord: 'cardboard'
		},
		{
			id: '240',
			russianWord: 'уход',
			englishWord: 'care'
		},
		{
			id: '241',
			russianWord: 'карьера',
			englishWord: 'career'
		},
		{
			id: '242',
			russianWord: 'тщательный',
			englishWord: 'careful'
		},
		{
			id: '243',
			russianWord: 'беспечный',
			englishWord: 'careless'
		},
		{
			id: '244',
			russianWord: 'ковер',
			englishWord: 'carpet'
		},
		{
			id: '245',
			russianWord: 'морковь',
			englishWord: 'carrot'
		},
		{
			id: '246',
			russianWord: 'дело',
			englishWord: 'case'
		},
		{
			id: '247',
			russianWord: 'наличные деньги',
			englishWord: 'cash'
		},
		{
			id: '248',
			russianWord: 'литье',
			englishWord: 'cast'
		},
		{
			id: '249',
			russianWord: 'замок',
			englishWord: 'castle'
		},
		{
			id: '250',
			russianWord: 'кошка',
			englishWord: 'cat'
		},
		{
			id: '251',
			russianWord: 'категория',
			englishWord: 'category'
		},
		{
			id: '252',
			russianWord: 'дело',
			englishWord: 'cause'
		},
		{
			id: '253',
			russianWord: 'изменение',
			englishWord: 'change'
		},
		{
			id: '254',
			russianWord: 'канал',
			englishWord: 'channel'
		},
		{
			id: '255',
			russianWord: 'глава',
			englishWord: 'chapter'
		},
		{
			id: '256',
			russianWord: 'характер',
			englishWord: 'character'
		},
		{
			id: '257',
			russianWord: 'характерный',
			englishWord: 'characteristic'
		},
		{
			id: '258',
			russianWord: 'заряд',
			englishWord: 'charge'
		},
		{
			id: '259',
			russianWord: 'благотворительность',
			englishWord: 'charity'
		},
		{
			id: '260',
			russianWord: 'график',
			englishWord: 'chart'
		},
		{
			id: '261',
			russianWord: 'охота',
			englishWord: 'chase'
		},
		{
			id: '262',
			russianWord: 'чат',
			englishWord: 'chat'
		},
		{
			id: '263',
			russianWord: 'дешевый',
			englishWord: 'cheap'
		},
		{
			id: '264',
			russianWord: 'дешево',
			englishWord: 'cheaply'
		},
		{
			id: '265',
			russianWord: 'мошенничество',
			englishWord: 'cheat'
		},
		{
			id: '266',
			russianWord: 'проверка',
			englishWord: 'check'
		},
		{
			id: '267',
			russianWord: 'щека',
			englishWord: 'cheek'
		},
		{
			id: '268',
			russianWord: 'веселый',
			englishWord: 'cheerful'
		},
		{
			id: '269',
			russianWord: 'сыр',
			englishWord: 'cheese'
		},
		{
			id: '270',
			russianWord: 'химический',
			englishWord: 'chemical'
		},
		{
			id: '271',
			russianWord: 'химик',
			englishWord: 'chemist'
		},
		{
			id: '272',
			russianWord: 'проверка',
			englishWord: 'cheque'
		},
		{
			id: '273',
			russianWord: 'грудь',
			englishWord: 'chest'
		},
		{
			id: '274',
			russianWord: 'классический',
			englishWord: 'classic'
		},
		{
			id: '275',
			russianWord: 'класс',
			englishWord: 'classroom'
		},
		{
			id: '276',
			russianWord: 'чистый',
			englishWord: 'clean'
		},
		{
			id: '277',
			russianWord: 'ясно',
			englishWord: 'clear'
		},
		{
			id: '278',
			russianWord: 'очевидно',
			englishWord: 'clearly'
		},
		{
			id: '279',
			russianWord: 'чиновник',
			englishWord: 'clerk'
		},
		{
			id: '280',
			russianWord: 'умный',
			englishWord: 'clever'
		},
		{
			id: '281',
			russianWord: 'нажмите',
			englishWord: 'click'
		},
		{
			id: '282',
			russianWord: 'клиент',
			englishWord: 'client'
		},
		{
			id: '283',
			russianWord: 'климат',
			englishWord: 'climate'
		},
		{
			id: '284',
			russianWord: 'восхождение',
			englishWord: 'climbing'
		},
		{
			id: '285',
			russianWord: 'часы',
			englishWord: 'clock'
		},
		{
			id: '286',
			russianWord: 'близко',
			englishWord: 'close'
		},
		{
			id: '287',
			russianWord: 'стенной шкаф',
			englishWord: 'closet'
		},
		{
			id: '288',
			russianWord: 'ткань',
			englishWord: 'cloth'
		},
		{
			id: '289',
			russianWord: 'одежда',
			englishWord: 'clothes'
		},
		{
			id: '290',
			russianWord: 'одежда',
			englishWord: 'clothing'
		},
		{
			id: '291',
			russianWord: 'облако',
			englishWord: 'cloud'
		},
		{
			id: '292',
			russianWord: 'клуб',
			englishWord: 'club'
		},
		{
			id: '293',
			russianWord: 'тренер',
			englishWord: 'coach'
		},
		{
			id: '294',
			russianWord: 'уголь',
			englishWord: 'coal'
		},
		{
			id: '295',
			russianWord: 'коммерческий',
			englishWord: 'commercial'
		},
		{
			id: '296',
			russianWord: 'комиссия',
			englishWord: 'commission'
		},
		{
			id: '297',
			russianWord: 'совершать',
			englishWord: 'commit'
		},
		{
			id: '298',
			russianWord: 'обязательство',
			englishWord: 'commitment'
		},
		{
			id: '299',
			russianWord: 'комитет',
			englishWord: 'committee'
		},
		{
			id: '300',
			russianWord: 'общий',
			englishWord: 'common'
		},
		{
			id: '301',
			russianWord: 'обычно',
			englishWord: 'commonly'
		},
		{
			id: '302',
			russianWord: 'общаться',
			englishWord: 'communicate'
		},
		{
			id: '303',
			russianWord: 'связь',
			englishWord: 'communication'
		},
		{
			id: '304',
			russianWord: 'сообщество',
			englishWord: 'community'
		},
		{
			id: '305',
			russianWord: 'компания',
			englishWord: 'company'
		},
		{
			id: '306',
			russianWord: 'сравнить',
			englishWord: 'compare'
		},
		{
			id: '307',
			russianWord: 'сравнение',
			englishWord: 'comparison'
		},
		{
			id: '308',
			russianWord: 'конкурировать',
			englishWord: 'compete'
		},
		{
			id: '309',
			russianWord: 'конкурс',
			englishWord: 'competition'
		},
		{
			id: '310',
			russianWord: 'конкурентный',
			englishWord: 'competitive'
		},
		{
			id: '311',
			russianWord: 'жаловаться',
			englishWord: 'complain'
		},
		{
			id: '312',
			russianWord: 'полный',
			englishWord: 'complete'
		},
		{
			id: '313',
			russianWord: 'комплекс',
			englishWord: 'complex'
		},
		{
			id: '314',
			russianWord: 'осложнять',
			englishWord: 'complicate'
		},
		{
			id: '315',
			russianWord: 'компьютер',
			englishWord: 'computer'
		},
		{
			id: '317',
			russianWord: 'конгресс',
			englishWord: 'congress'
		},
		{
			id: '318',
			russianWord: 'соединять',
			englishWord: 'connect'
		},
		{
			id: '319',
			russianWord: 'связи',
			englishWord: 'connection'
		},
		{
			id: '320',
			russianWord: 'сознательный',
			englishWord: 'conscious'
		},
		{
			id: '321',
			russianWord: 'следствие',
			englishWord: 'consequence'
		},
		{
			id: '322',
			russianWord: 'консервативный',
			englishWord: 'conservative'
		},
		{
			id: '323',
			russianWord: 'рассматривать',
			englishWord: 'consider'
		},
		{
			id: '324',
			russianWord: 'значительный',
			englishWord: 'considerable'
		},
		{
			id: '325',
			russianWord: 'значительно',
			englishWord: 'considerably'
		},
		{
			id: '326',
			russianWord: 'рассмотрение',
			englishWord: 'consideration'
		},
		{
			id: '327',
			russianWord: 'состоять из',
			englishWord: 'consist of'
		},
		{
			id: '328',
			russianWord: 'постоянная',
			englishWord: 'constant'
		},
		{
			id: '329',
			russianWord: 'постоянно',
			englishWord: 'constantly'
		},
		{
			id: '330',
			russianWord: 'строить',
			englishWord: 'construct'
		},
		{
			id: '331',
			russianWord: 'строительство',
			englishWord: 'construction'
		},
		{
			id: '332',
			russianWord: 'консультироваться',
			englishWord: 'consult'
		},
		{
			id: '333',
			russianWord: 'потребитель',
			englishWord: 'consumer'
		},
		{
			id: '334',
			russianWord: 'контакт',
			englishWord: 'contact'
		},
		{
			id: '335',
			russianWord: 'содержать',
			englishWord: 'contain'
		},
		{
			id: '336',
			russianWord: 'контейнер',
			englishWord: 'container'
		},
		{
			id: '337',
			russianWord: 'прохладный',
			englishWord: 'cool'
		},
		{
			id: '338',
			russianWord: 'копия',
			englishWord: 'copy'
		},
		{
			id: '339',
			russianWord: 'ядро',
			englishWord: 'core'
		},
		{
			id: '340',
			russianWord: 'угол',
			englishWord: 'corner'
		},
		{
			id: '341',
			russianWord: 'правильный',
			englishWord: 'correct'
		},
		{
			id: '342',
			russianWord: 'правильно',
			englishWord: 'correctly'
		},
		{
			id: '343',
			russianWord: 'стоимость',
			englishWord: 'cost'
		},
		{
			id: '344',
			russianWord: 'коттедж',
			englishWord: 'cottage'
		},
		{
			id: '345',
			russianWord: 'хлопок',
			englishWord: 'cotton'
		},
		{
			id: '346',
			russianWord: 'кашель',
			englishWord: 'cough'
		},
		{
			id: '347',
			russianWord: 'кашляющий',
			englishWord: 'coughing'
		},
		{
			id: '348',
			russianWord: 'может',
			englishWord: 'could'
		},
		{
			id: '349',
			russianWord: 'совет',
			englishWord: 'council'
		},
		{
			id: '350',
			russianWord: 'считать',
			englishWord: 'count'
		},
		{
			id: '351',
			russianWord: 'счетчик',
			englishWord: 'counter'
		},
		{
			id: '352',
			russianWord: 'страна',
			englishWord: 'country'
		},
		{
			id: '353',
			russianWord: 'деревня',
			englishWord: 'countryside'
		},
		{
			id: '354',
			russianWord: 'графство',
			englishWord: 'county'
		},
		{
			id: '355',
			russianWord: 'пара',
			englishWord: 'couple'
		},
		{
			id: '356',
			russianWord: 'мужество',
			englishWord: 'courage'
		},
		{
			id: '357',
			russianWord: 'курс',
			englishWord: 'course'
		},
		{
			id: '358',
			russianWord: 'толпа',
			englishWord: 'crowd'
		},
		{
			id: '359',
			russianWord: 'венец',
			englishWord: 'crown'
		},
		{
			id: '360',
			russianWord: 'решающий',
			englishWord: 'crucial'
		},
		{
			id: '361',
			russianWord: 'жестокий',
			englishWord: 'cruel'
		},
		{
			id: '362',
			russianWord: 'раздавить',
			englishWord: 'crush'
		},
		{
			id: '363',
			russianWord: 'плакать',
			englishWord: 'cry'
		},
		{
			id: '364',
			russianWord: 'культурный',
			englishWord: 'cultural'
		},
		{
			id: '365',
			russianWord: 'культура',
			englishWord: 'culture'
		},
		{
			id: '366',
			russianWord: 'кубок',
			englishWord: 'cup'
		},
		{
			id: '367',
			russianWord: 'шкаф',
			englishWord: 'cupboard'
		},
		{
			id: '368',
			russianWord: 'сдерживать',
			englishWord: 'curb'
		},
		{
			id: '369',
			russianWord: 'лечить',
			englishWord: 'cure'
		},
		{
			id: '370',
			russianWord: 'любопытный',
			englishWord: 'curious'
		},
		{
			id: '371',
			russianWord: 'странно',
			englishWord: 'curiously'
		},
		{
			id: '372',
			russianWord: 'завиток',
			englishWord: 'curl'
		},
		{
			id: '373',
			russianWord: 'кудрявый',
			englishWord: 'curly'
		},
		{
			id: '374',
			russianWord: 'текущий',
			englishWord: 'current'
		},
		{
			id: '375',
			russianWord: 'в настоящее время',
			englishWord: 'currently'
		},
		{
			id: '376',
			russianWord: 'занавес',
			englishWord: 'curtain'
		},
		{
			id: '377',
			russianWord: 'кривая',
			englishWord: 'curve'
		},
		{
			id: '378',
			russianWord: 'обычай',
			englishWord: 'custom'
		},
		{
			id: '379',
			russianWord: 'глухой',
			englishWord: 'deaf'
		},
		{
			id: '380',
			russianWord: 'дело',
			englishWord: 'deal'
		},
		{
			id: '381',
			russianWord: 'дело с',
			englishWord: 'deal with'
		},
		{
			id: '382',
			russianWord: 'дорогой',
			englishWord: 'dear'
		},
		{
			id: '383',
			russianWord: 'смерть',
			englishWord: 'death'
		},
		{
			id: '384',
			russianWord: 'обсуждение',
			englishWord: 'debate'
		},
		{
			id: '385',
			russianWord: 'долг',
			englishWord: 'debt'
		},
		{
			id: '386',
			russianWord: 'десятилетие',
			englishWord: 'decade'
		},
		{
			id: '387',
			russianWord: 'распад',
			englishWord: 'decay'
		},
		{
			id: '388',
			russianWord: 'декабрь',
			englishWord: 'december'
		},
		{
			id: '389',
			russianWord: 'решать',
			englishWord: 'decide'
		},
		{
			id: '390',
			russianWord: 'решение',
			englishWord: 'decision'
		},
		{
			id: '391',
			russianWord: 'объявлять',
			englishWord: 'declare'
		},
		{
			id: '392',
			russianWord: 'снижение',
			englishWord: 'decline'
		},
		{
			id: '393',
			russianWord: 'украшать',
			englishWord: 'decorate'
		},
		{
			id: '394',
			russianWord: 'украшение',
			englishWord: 'decoration'
		},
		{
			id: '395',
			russianWord: 'декоративный',
			englishWord: 'decorative'
		},
		{
			id: '396',
			russianWord: 'снижение',
			englishWord: 'decrease'
		},
		{
			id: '397',
			russianWord: 'глубокий',
			englishWord: 'deep'
		},
		{
			id: '398',
			russianWord: 'глубоко',
			englishWord: 'deeply'
		},
		{
			id: '399',
			russianWord: 'поражение',
			englishWord: 'defeat'
		},
		{
			id: '400',
			russianWord: 'гнетущий',
			englishWord: 'depressing'
		},
		{
			id: '401',
			russianWord: 'глубина',
			englishWord: 'depth'
		},
		{
			id: '402',
			russianWord: 'получать',
			englishWord: 'derive'
		},
		{
			id: '403',
			russianWord: 'описывать',
			englishWord: 'describe'
		},
		{
			id: '404',
			russianWord: 'описание',
			englishWord: 'description'
		},
		{
			id: '405',
			russianWord: 'пустыня',
			englishWord: 'desert'
		},
		{
			id: '406',
			russianWord: 'заслуживать',
			englishWord: 'deserve'
		},
		{
			id: '407',
			russianWord: 'дизайн',
			englishWord: 'design'
		},
		{
			id: '408',
			russianWord: 'желание',
			englishWord: 'desire'
		},
		{
			id: '409',
			russianWord: 'стол',
			englishWord: 'desk'
		},
		{
			id: '410',
			russianWord: 'отчаянный',
			englishWord: 'desperate'
		},
		{
			id: '411',
			russianWord: 'несмотря на',
			englishWord: 'despite'
		},
		{
			id: '412',
			russianWord: 'уничтожить',
			englishWord: 'destroy'
		},
		{
			id: '413',
			russianWord: 'уничтожение',
			englishWord: 'destruction'
		},
		{
			id: '414',
			russianWord: 'деталь',
			englishWord: 'detail'
		},
		{
			id: '415',
			russianWord: 'определение',
			englishWord: 'determination'
		},
		{
			id: '416',
			russianWord: 'определять',
			englishWord: 'determine'
		},
		{
			id: '417',
			russianWord: 'развивать',
			englishWord: 'develop'
		},
		{
			id: '418',
			russianWord: 'развитие',
			englishWord: 'development'
		},
		{
			id: '419',
			russianWord: 'устройство',
			englishWord: 'device'
		},
		{
			id: '420',
			russianWord: 'посвящать',
			englishWord: 'devote'
		},
		{
			id: '421',
			russianWord: 'несогласие',
			englishWord: 'disagreement'
		},
		{
			id: '422',
			russianWord: 'исчезать',
			englishWord: 'disappear'
		},
		{
			id: '423',
			russianWord: 'разочаровывать',
			englishWord: 'disappoint'
		},
		{
			id: '424',
			russianWord: 'разочаровывающий',
			englishWord: 'disappointing'
		},
		{
			id: '425',
			russianWord: 'разочарование',
			englishWord: 'disappointment'
		},
		{
			id: '426',
			russianWord: 'неодобрение',
			englishWord: 'disapproval'
		},
		{
			id: '427',
			russianWord: 'не одобрять',
			englishWord: 'disapprove'
		},
		{
			id: '428',
			russianWord: 'неодобрительно',
			englishWord: 'disapproving'
		},
		{
			id: '429',
			russianWord: 'катастрофа',
			englishWord: 'disaster'
		},
		{
			id: '430',
			russianWord: 'диск',
			englishWord: 'disc'
		},
		{
			id: '431',
			russianWord: 'дисциплина',
			englishWord: 'discipline'
		},
		{
			id: '432',
			russianWord: 'скидка',
			englishWord: 'discount'
		},
		{
			id: '433',
			russianWord: 'открыть',
			englishWord: 'discover'
		},
		{
			id: '434',
			russianWord: 'открытие',
			englishWord: 'discovery'
		},
		{
			id: '435',
			russianWord: 'обсуждать',
			englishWord: 'discuss'
		},
		{
			id: '436',
			russianWord: 'обсуждение',
			englishWord: 'discussion'
		},
		{
			id: '437',
			russianWord: 'болезнь',
			englishWord: 'disease'
		},
		{
			id: '438',
			russianWord: 'отвращение',
			englishWord: 'disgust'
		},
		{
			id: '439',
			russianWord: 'отвратительный',
			englishWord: 'disgusting'
		},
		{
			id: '440',
			russianWord: 'блюдо',
			englishWord: 'dish'
		},
		{
			id: '441',
			russianWord: 'нечестный',
			englishWord: 'dishonest'
		},
		{
			id: '442',
			russianWord: 'доминировать',
			englishWord: 'dominate'
		},
		{
			id: '443',
			russianWord: 'дверь',
			englishWord: 'door'
		},
		{
			id: '444',
			russianWord: 'точка',
			englishWord: 'dot'
		},
		{
			id: '445',
			russianWord: 'двойной',
			englishWord: 'double'
		},
		{
			id: '446',
			russianWord: 'сомнение',
			englishWord: 'doubt'
		},
		{
			id: '447',
			russianWord: 'вниз',
			englishWord: 'down'
		},
		{
			id: '448',
			russianWord: 'вниз',
			englishWord: 'downstairs'
		},
		{
			id: '449',
			russianWord: 'вниз',
			englishWord: 'downward'
		},
		{
			id: '450',
			russianWord: 'вниз',
			englishWord: 'downwards'
		},
		{
			id: '451',
			russianWord: 'дюжина',
			englishWord: 'dozen'
		},
		{
			id: '452',
			russianWord: 'проект',
			englishWord: 'draft'
		},
		{
			id: '453',
			russianWord: 'тащить',
			englishWord: 'drag'
		},
		{
			id: '454',
			russianWord: 'драма',
			englishWord: 'drama'
		},
		{
			id: '455',
			russianWord: 'драматический',
			englishWord: 'dramatic'
		},
		{
			id: '456',
			russianWord: 'рисовать',
			englishWord: 'draw'
		},
		{
			id: '457',
			russianWord: 'ящик',
			englishWord: 'drawer'
		},
		{
			id: '458',
			russianWord: 'рисунок',
			englishWord: 'drawing'
		},
		{
			id: '459',
			russianWord: 'сон',
			englishWord: 'dream'
		},
		{
			id: '460',
			russianWord: 'платье',
			englishWord: 'dress'
		},
		{
			id: '461',
			russianWord: 'пить',
			englishWord: 'drink'
		},
		{
			id: '462',
			russianWord: 'привод',
			englishWord: 'drive'
		},
		{
			id: '463',
			russianWord: 'легкость',
			englishWord: 'ease'
		},
		{
			id: '464',
			russianWord: 'легко',
			englishWord: 'easily'
		},
		{
			id: '465',
			russianWord: 'на восток',
			englishWord: 'east'
		},
		{
			id: '466',
			russianWord: 'восточный',
			englishWord: 'eastern'
		},
		{
			id: '467',
			russianWord: 'легко',
			englishWord: 'easy'
		},
		{
			id: '468',
			russianWord: 'есть',
			englishWord: 'eat'
		},
		{
			id: '469',
			russianWord: 'экономический',
			englishWord: 'economic'
		},
		{
			id: '470',
			russianWord: 'экономика',
			englishWord: 'economy'
		},
		{
			id: '471',
			russianWord: 'эффект',
			englishWord: 'effect'
		},
		{
			id: '472',
			russianWord: 'эффективный',
			englishWord: 'effective'
		},
		{
			id: '473',
			russianWord: 'эффективный',
			englishWord: 'efficient'
		},
		{
			id: '474',
			russianWord: 'эффективно',
			englishWord: 'efficiently'
		},
		{
			id: '475',
			russianWord: 'усилие',
			englishWord: 'effort'
		},
		{
			id: '476',
			russianWord: 'яйцо',
			englishWord: 'egg'
		},
		{
			id: '477',
			russianWord: 'или',
			englishWord: 'either'
		},
		{
			id: '478',
			russianWord: 'локоть',
			englishWord: 'elbow'
		},
		{
			id: '479',
			russianWord: 'пожилой',
			englishWord: 'elderly'
		},
		{
			id: '480',
			russianWord: 'избирать',
			englishWord: 'elect'
		},
		{
			id: '481',
			russianWord: 'выборы',
			englishWord: 'election'
		},
		{
			id: '482',
			russianWord: 'электрический',
			englishWord: 'electric'
		},
		{
			id: '483',
			russianWord: 'электрический',
			englishWord: 'electrical'
		},
		{
			id: '484',
			russianWord: 'пустой',
			englishWord: 'empty'
		},
		{
			id: '485',
			russianWord: 'позволить',
			englishWord: 'enable'
		},
		{
			id: '486',
			russianWord: 'сталкиваться',
			englishWord: 'encounter'
		},
		{
			id: '487',
			russianWord: 'поощрять',
			englishWord: 'encourage'
		},
		{
			id: '488',
			russianWord: 'поощрение',
			englishWord: 'encouragement'
		},
		{
			id: '489',
			russianWord: 'конец',
			englishWord: 'end'
		},
		{
			id: '490',
			russianWord: 'окончание',
			englishWord: 'ending'
		},
		{
			id: '491',
			russianWord: 'враг',
			englishWord: 'enemy'
		},
		{
			id: '492',
			russianWord: 'энергия',
			englishWord: 'energy'
		},
		{
			id: '493',
			russianWord: 'заниматься',
			englishWord: 'engage'
		},
		{
			id: '494',
			russianWord: 'двигатель',
			englishWord: 'engine'
		},
		{
			id: '495',
			russianWord: 'инженер',
			englishWord: 'engineer'
		},
		{
			id: '496',
			russianWord: 'машиностроение',
			englishWord: 'engineering'
		},
		{
			id: '497',
			russianWord: 'пользоваться',
			englishWord: 'enjoy'
		},
		{
			id: '498',
			russianWord: 'огромный',
			englishWord: 'enormous'
		},
		{
			id: '499',
			russianWord: 'достаточно',
			englishWord: 'enough'
		},
		{
			id: '500',
			russianWord: 'запрос',
			englishWord: 'enquiry'
		},
		{
			id: '501',
			russianWord: 'обеспечивать',
			englishWord: 'ensure'
		},
		{
			id: '502',
			russianWord: 'вводить',
			englishWord: 'enter'
		},
		{
			id: '503',
			russianWord: 'развлекать',
			englishWord: 'entertain'
		},
		{
			id: '504',
			russianWord: 'конферансье',
			englishWord: 'entertainer'
		},
		{
			id: '505',
			russianWord: 'евро',
			englishWord: 'euro'
		},
		{
			id: '506',
			russianWord: 'даже',
			englishWord: 'even'
		},
		{
			id: '507',
			russianWord: 'вечер',
			englishWord: 'evening'
		},
		{
			id: '508',
			russianWord: 'событие',
			englishWord: 'event'
		},
		{
			id: '509',
			russianWord: 'когда-либо',
			englishWord: 'ever'
		},
		{
			id: '510',
			russianWord: 'каждый',
			englishWord: 'every'
		},
		{
			id: '511',
			russianWord: 'каждый',
			englishWord: 'everyone'
		},
		{
			id: '512',
			russianWord: 'все',
			englishWord: 'everything'
		},
		{
			id: '513',
			russianWord: 'везде',
			englishWord: 'everywhere'
		},
		{
			id: '514',
			russianWord: 'доказательства',
			englishWord: 'evidence'
		},
		{
			id: '515',
			russianWord: 'зло',
			englishWord: 'evil'
		},
		{
			id: '516',
			russianWord: 'точный',
			englishWord: 'exact'
		},
		{
			id: '517',
			russianWord: 'точно',
			englishWord: 'exactly'
		},
		{
			id: '518',
			russianWord: 'преувеличивать',
			englishWord: 'exaggerate'
		},
		{
			id: '519',
			russianWord: 'экзамен',
			englishWord: 'exam'
		},
		{
			id: '520',
			russianWord: 'изучать',
			englishWord: 'examine'
		},
		{
			id: '521',
			russianWord: 'пример',
			englishWord: 'example'
		},
		{
			id: '522',
			russianWord: 'отличный',
			englishWord: 'excellent'
		},
		{
			id: '523',
			russianWord: 'за исключением',
			englishWord: 'except'
		},
		{
			id: '524',
			russianWord: 'исключение',
			englishWord: 'exception'
		},
		{
			id: '525',
			russianWord: 'обмен',
			englishWord: 'exchange'
		},
		{
			id: '526',
			russianWord: 'объяснять',
			englishWord: 'explain'
		},
		{
			id: '527',
			russianWord: 'объяснение',
			englishWord: 'explanation'
		},
		{
			id: '528',
			russianWord: 'взорваться',
			englishWord: 'explode'
		},
		{
			id: '529',
			russianWord: 'изучать',
			englishWord: 'explore'
		},
		{
			id: '530',
			russianWord: 'взрыв',
			englishWord: 'explosion'
		},
		{
			id: '531',
			russianWord: 'экспорт',
			englishWord: 'export'
		},
		{
			id: '532',
			russianWord: 'разоблачать',
			englishWord: 'expose'
		},
		{
			id: '533',
			russianWord: 'экспресс',
			englishWord: 'express'
		},
		{
			id: '534',
			russianWord: 'выражение',
			englishWord: 'expression'
		},
		{
			id: '535',
			russianWord: 'продлить',
			englishWord: 'extend'
		},
		{
			id: '536',
			russianWord: 'расширение',
			englishWord: 'extension'
		},
		{
			id: '537',
			russianWord: 'степень',
			englishWord: 'extent'
		},
		{
			id: '538',
			russianWord: 'дополнительный',
			englishWord: 'extra'
		},
		{
			id: '539',
			russianWord: 'внеочередной',
			englishWord: 'extraordinary'
		},
		{
			id: '540',
			russianWord: 'экстремальный',
			englishWord: 'extreme'
		},
		{
			id: '541',
			russianWord: 'глаз',
			englishWord: 'eye'
		},
		{
			id: '542',
			russianWord: 'лицо',
			englishWord: 'face'
		},
		{
			id: '543',
			russianWord: 'факт',
			englishWord: 'fact'
		},
		{
			id: '544',
			russianWord: 'фактор',
			englishWord: 'factor'
		},
		{
			id: '545',
			russianWord: 'завод',
			englishWord: 'factory'
		},
		{
			id: '546',
			russianWord: 'поражение',
			englishWord: 'fail'
		},
		{
			id: '547',
			russianWord: 'модный',
			englishWord: 'fashionable'
		},
		{
			id: '548',
			russianWord: 'быстро',
			englishWord: 'fast'
		},
		{
			id: '549',
			russianWord: 'крепить',
			englishWord: 'fasten'
		},
		{
			id: '550',
			russianWord: 'толстый',
			englishWord: 'fat'
		},
		{
			id: '551',
			russianWord: 'отец',
			englishWord: 'father'
		},
		{
			id: '552',
			russianWord: 'кран',
			englishWord: 'faucet'
		},
		{
			id: '553',
			russianWord: 'вина',
			englishWord: 'fault'
		},
		{
			id: '554',
			russianWord: 'поддержка',
			englishWord: 'favour'
		},
		{
			id: '555',
			russianWord: 'любимый',
			englishWord: 'favourite'
		},
		{
			id: '556',
			russianWord: 'страх',
			englishWord: 'fear'
		},
		{
			id: '557',
			russianWord: 'перо',
			englishWord: 'feather'
		},
		{
			id: '558',
			russianWord: 'особенность',
			englishWord: 'feature'
		},
		{
			id: '559',
			russianWord: 'сбор',
			englishWord: 'fee'
		},
		{
			id: '560',
			russianWord: 'чувствовать',
			englishWord: 'feel'
		},
		{
			id: '561',
			russianWord: 'чувство',
			englishWord: 'feeling'
		},
		{
			id: '562',
			russianWord: 'человек',
			englishWord: 'fellow'
		},
		{
			id: '563',
			russianWord: 'женский',
			englishWord: 'female'
		},
		{
			id: '564',
			russianWord: 'забор',
			englishWord: 'fence'
		},
		{
			id: '565',
			russianWord: 'фестиваль',
			englishWord: 'festival'
		},
		{
			id: '566',
			russianWord: 'извлечение',
			englishWord: 'fetch'
		},
		{
			id: '567',
			russianWord: 'лихорадка',
			englishWord: 'fever'
		},
		{
			id: '568',
			russianWord: 'соответствовать',
			englishWord: 'fit'
		},
		{
			id: '569',
			russianWord: 'фиксировать',
			englishWord: 'fix'
		},
		{
			id: '570',
			russianWord: 'флаг',
			englishWord: 'flag'
		},
		{
			id: '571',
			russianWord: 'пламя',
			englishWord: 'flame'
		},
		{
			id: '572',
			russianWord: 'вспышка',
			englishWord: 'flash'
		},
		{
			id: '573',
			russianWord: 'плоский',
			englishWord: 'flat'
		},
		{
			id: '574',
			russianWord: 'вкус',
			englishWord: 'flavour'
		},
		{
			id: '575',
			russianWord: 'плоть',
			englishWord: 'flesh'
		},
		{
			id: '576',
			russianWord: 'полет',
			englishWord: 'flight'
		},
		{
			id: '577',
			russianWord: 'поплавок',
			englishWord: 'float'
		},
		{
			id: '578',
			russianWord: 'наводнение',
			englishWord: 'flood'
		},
		{
			id: '579',
			russianWord: 'этаж',
			englishWord: 'floor'
		},
		{
			id: '580',
			russianWord: 'муки',
			englishWord: 'flour'
		},
		{
			id: '581',
			russianWord: 'поток',
			englishWord: 'flow'
		},
		{
			id: '582',
			russianWord: 'цветок',
			englishWord: 'flower'
		},
		{
			id: '583',
			russianWord: 'грипп',
			englishWord: 'flu'
		},
		{
			id: '584',
			russianWord: 'летать',
			englishWord: 'fly'
		},
		{
			id: '585',
			russianWord: 'фокус',
			englishWord: 'focus'
		},
		{
			id: '586',
			russianWord: 'складка',
			englishWord: 'fold'
		},
		{
			id: '587',
			russianWord: 'складной',
			englishWord: 'folding'
		},
		{
			id: '588',
			russianWord: 'следить',
			englishWord: 'follow'
		},
		{
			id: '589',
			russianWord: 'найдено',
			englishWord: 'found'
		},
		{
			id: '590',
			russianWord: 'фундамент',
			englishWord: 'foundation'
		},
		{
			id: '591',
			russianWord: 'кадр',
			englishWord: 'frame'
		},
		{
			id: '592',
			russianWord: 'свободный',
			englishWord: 'free'
		},
		{
			id: '593',
			russianWord: 'замораживание',
			englishWord: 'freeze'
		},
		{
			id: '594',
			russianWord: 'частый',
			englishWord: 'frequent'
		},
		{
			id: '595',
			russianWord: 'часто',
			englishWord: 'frequently'
		},
		{
			id: '596',
			russianWord: 'свежий',
			englishWord: 'fresh'
		},
		{
			id: '597',
			russianWord: 'только что',
			englishWord: 'freshly'
		},
		{
			id: '598',
			russianWord: 'пятница',
			englishWord: 'friday'
		},
		{
			id: '599',
			russianWord: 'холодильник',
			englishWord: 'fridge'
		},
		{
			id: '600',
			russianWord: 'друг',
			englishWord: 'friend'
		},
		{
			id: '601',
			russianWord: 'дружественный',
			englishWord: 'friendly'
		},
		{
			id: '602',
			russianWord: 'дружба',
			englishWord: 'friendship'
		},
		{
			id: '603',
			russianWord: 'пугать',
			englishWord: 'frighten'
		},
		{
			id: '604',
			russianWord: 'пугающий',
			englishWord: 'frightening'
		},
		{
			id: '605',
			russianWord: 'от',
			englishWord: 'from'
		},
		{
			id: '606',
			russianWord: 'передний',
			englishWord: 'front'
		},
		{
			id: '607',
			russianWord: 'замороженный',
			englishWord: 'frozen'
		},
		{
			id: '608',
			russianWord: 'фрукты',
			englishWord: 'fruit'
		},
		{
			id: '609',
			russianWord: 'жарить',
			englishWord: 'fry'
		},
		{
			id: '610',
			russianWord: 'газ',
			englishWord: 'gas'
		},
		{
			id: '611',
			russianWord: 'бензин',
			englishWord: 'gasoline'
		},
		{
			id: '612',
			russianWord: 'ворота',
			englishWord: 'gate'
		},
		{
			id: '613',
			russianWord: 'собирать',
			englishWord: 'gather'
		},
		{
			id: '614',
			russianWord: 'шестерня',
			englishWord: 'gear'
		},
		{
			id: '615',
			russianWord: 'общий',
			englishWord: 'general'
		},
		{
			id: '616',
			russianWord: 'генерировать',
			englishWord: 'generate'
		},
		{
			id: '617',
			russianWord: 'поколение',
			englishWord: 'generation'
		},
		{
			id: '618',
			russianWord: 'щедрый',
			englishWord: 'generous'
		},
		{
			id: '619',
			russianWord: 'щедро',
			englishWord: 'generously'
		},
		{
			id: '620',
			russianWord: 'нежный',
			englishWord: 'gentle'
		},
		{
			id: '621',
			russianWord: 'джентльмен',
			englishWord: 'gentleman'
		},
		{
			id: '622',
			russianWord: 'осторожно',
			englishWord: 'gently'
		},
		{
			id: '623',
			russianWord: 'подлинный',
			englishWord: 'genuine'
		},
		{
			id: '624',
			russianWord: 'география',
			englishWord: 'geography'
		},
		{
			id: '625',
			russianWord: 'сойти',
			englishWord: 'get off'
		},
		{
			id: '626',
			russianWord: 'ладить',
			englishWord: 'get on'
		},
		{
			id: '627',
			russianWord: 'гигантский',
			englishWord: 'giant'
		},
		{
			id: '628',
			russianWord: 'подарок',
			englishWord: 'gift'
		},
		{
			id: '629',
			russianWord: 'девушка',
			englishWord: 'girl'
		},
		{
			id: '630',
			russianWord: 'подруга',
			englishWord: 'girlfriend'
		},
		{
			id: '631',
			russianWord: 'грамматика',
			englishWord: 'grammar'
		},
		{
			id: '632',
			russianWord: 'большой',
			englishWord: 'grand'
		},
		{
			id: '633',
			russianWord: 'внук',
			englishWord: 'grandchild'
		},
		{
			id: '634',
			russianWord: 'внучка',
			englishWord: 'granddaughter'
		},
		{
			id: '635',
			russianWord: 'дед',
			englishWord: 'grandfather'
		},
		{
			id: '636',
			russianWord: 'бабушка',
			englishWord: 'grandmother'
		},
		{
			id: '638',
			russianWord: 'внук',
			englishWord: 'grandson'
		},
		{
			id: '639',
			russianWord: 'грант',
			englishWord: 'grant'
		},
		{
			id: '640',
			russianWord: 'трава',
			englishWord: 'grass'
		},
		{
			id: '641',
			russianWord: 'благодарный',
			englishWord: 'grateful'
		},
		{
			id: '642',
			russianWord: 'могила',
			englishWord: 'grave'
		},
		{
			id: '643',
			russianWord: 'большой',
			englishWord: 'great'
		},
		{
			id: '644',
			russianWord: 'значительно',
			englishWord: 'greatly'
		},
		{
			id: '645',
			russianWord: 'зеленый',
			englishWord: 'green'
		},
		{
			id: '647',
			russianWord: 'бакалея',
			englishWord: 'grocery'
		},
		{
			id: '648',
			russianWord: 'земля',
			englishWord: 'ground'
		},
		{
			id: '649',
			russianWord: 'группа',
			englishWord: 'group'
		},
		{
			id: '650',
			russianWord: 'расти',
			englishWord: 'grow'
		},
		{
			id: '651',
			russianWord: 'рост',
			englishWord: 'growth'
		},
		{
			id: '652',
			russianWord: 'жесткий',
			englishWord: 'hard'
		},
		{
			id: '653',
			russianWord: 'вряд ли',
			englishWord: 'hardly'
		},
		{
			id: '654',
			russianWord: 'вред',
			englishWord: 'harm'
		},
		{
			id: '655',
			russianWord: 'вредный',
			englishWord: 'harmful'
		},
		{
			id: '656',
			russianWord: 'безвредный',
			englishWord: 'harmless'
		},
		{
			id: '657',
			russianWord: 'шляпа',
			englishWord: 'hat'
		},
		{
			id: '658',
			russianWord: 'ненависть',
			englishWord: 'hate'
		},
		{
			id: '659',
			russianWord: 'иметь',
			englishWord: 'have'
		},
		{
			id: '660',
			russianWord: 'руководитель',
			englishWord: 'head'
		},
		{
			id: '661',
			russianWord: 'головная боль',
			englishWord: 'headache'
		},
		{
			id: '662',
			russianWord: 'заживать',
			englishWord: 'heal'
		},
		{
			id: '663',
			russianWord: 'здоровье',
			englishWord: 'health'
		},
		{
			id: '664',
			russianWord: 'здоровый',
			englishWord: 'healthy'
		},
		{
			id: '665',
			russianWord: 'услышать',
			englishWord: 'hear'
		},
		{
			id: '666',
			russianWord: 'слух',
			englishWord: 'hearing'
		},
		{
			id: '667',
			russianWord: 'сердце',
			englishWord: 'heart'
		},
		{
			id: '668',
			russianWord: 'тепло',
			englishWord: 'heat'
		},
		{
			id: '669',
			russianWord: 'отопление',
			englishWord: 'heating'
		},
		{
			id: '670',
			russianWord: 'небо',
			englishWord: 'heaven'
		},
		{
			id: '671',
			russianWord: 'сильно',
			englishWord: 'heavily'
		},
		{
			id: '672',
			russianWord: 'тяжелый',
			englishWord: 'heavy'
		},
		{
			id: '673',
			russianWord: 'хобби',
			englishWord: 'hobby'
		},
		{
			id: '674',
			russianWord: 'держать',
			englishWord: 'hold'
		},
		{
			id: '675',
			russianWord: 'отверстие',
			englishWord: 'hole'
		},
		{
			id: '676',
			russianWord: 'праздник',
			englishWord: 'holiday'
		},
		{
			id: '677',
			russianWord: 'полый',
			englishWord: 'hollow'
		},
		{
			id: '678',
			russianWord: 'святой',
			englishWord: 'holy'
		},
		{
			id: '679',
			russianWord: 'дома',
			englishWord: 'home'
		},
		{
			id: '680',
			russianWord: 'домашнее задание',
			englishWord: 'homework'
		},
		{
			id: '681',
			russianWord: 'честный',
			englishWord: 'honest'
		},
		{
			id: '682',
			russianWord: 'честно',
			englishWord: 'honestly'
		},
		{
			id: '683',
			russianWord: 'крючок',
			englishWord: 'hook'
		},
		{
			id: '684',
			russianWord: 'надежда',
			englishWord: 'hope'
		},
		{
			id: '685',
			russianWord: 'горизонтальный',
			englishWord: 'horizontal'
		},
		{
			id: '686',
			russianWord: 'рог',
			englishWord: 'horn'
		},
		{
			id: '687',
			russianWord: 'ужас',
			englishWord: 'horror'
		},
		{
			id: '688',
			russianWord: 'лошадь',
			englishWord: 'horse'
		},
		{
			id: '689',
			russianWord: 'больница',
			englishWord: 'hospital'
		},
		{
			id: '690',
			russianWord: 'хозяин',
			englishWord: 'host'
		},
		{
			id: '691',
			russianWord: 'горячий',
			englishWord: 'hot'
		},
		{
			id: '692',
			russianWord: 'отель',
			englishWord: 'hotel'
		},
		{
			id: '693',
			russianWord: 'час',
			englishWord: 'hour'
		},
		{
			id: '694',
			russianWord: 'больной',
			englishWord: 'ill'
		},
		{
			id: '695',
			russianWord: 'незаконный',
			englishWord: 'illegal'
		},
		{
			id: '696',
			russianWord: 'болезнь',
			englishWord: 'illness'
		},
		{
			id: '697',
			russianWord: 'иллюстрировать',
			englishWord: 'illustrate'
		},
		{
			id: '698',
			russianWord: 'изображение',
			englishWord: 'image'
		},
		{
			id: '699',
			russianWord: 'воображаемый',
			englishWord: 'imaginary'
		},
		{
			id: '700',
			russianWord: 'воображение',
			englishWord: 'imagination'
		},
		{
			id: '701',
			russianWord: 'вообразить',
			englishWord: 'imagine'
		},
		{
			id: '702',
			russianWord: 'безнравственный',
			englishWord: 'immoral'
		},
		{
			id: '703',
			russianWord: 'воздействие',
			englishWord: 'impact'
		},
		{
			id: '704',
			russianWord: 'нетерпеливый',
			englishWord: 'impatient'
		},
		{
			id: '705',
			russianWord: 'с нетерпением',
			englishWord: 'impatiently'
		},
		{
			id: '706',
			russianWord: 'импликация',
			englishWord: 'implication'
		},
		{
			id: '707',
			russianWord: 'подразумевать',
			englishWord: 'imply'
		},
		{
			id: '708',
			russianWord: 'импорт',
			englishWord: 'import'
		},
		{
			id: '709',
			russianWord: 'значение',
			englishWord: 'importance'
		},
		{
			id: '710',
			russianWord: 'важный',
			englishWord: 'important'
		},
		{
			id: '711',
			russianWord: 'важно',
			englishWord: 'importantly'
		},
		{
			id: '712',
			russianWord: 'налагать',
			englishWord: 'impose'
		},
		{
			id: '713',
			russianWord: 'невозможное',
			englishWord: 'impossible'
		},
		{
			id: '714',
			russianWord: 'впечатление',
			englishWord: 'impress'
		},
		{
			id: '715',
			russianWord: 'указывать',
			englishWord: 'indicate'
		},
		{
			id: '716',
			russianWord: 'индикация',
			englishWord: 'indication'
		},
		{
			id: '717',
			russianWord: 'непрямой',
			englishWord: 'indirect'
		},
		{
			id: '718',
			russianWord: 'косвенно',
			englishWord: 'indirectly'
		},
		{
			id: '719',
			russianWord: 'индивидуальный',
			englishWord: 'individual'
		},
		{
			id: '720',
			russianWord: 'крытый',
			englishWord: 'indoor'
		},
		{
			id: '721',
			russianWord: 'в помещении',
			englishWord: 'indoors'
		},
		{
			id: '722',
			russianWord: 'промышленный',
			englishWord: 'industrial'
		},
		{
			id: '723',
			russianWord: 'промышленность',
			englishWord: 'industry'
		},
		{
			id: '724',
			russianWord: 'неизбежный',
			englishWord: 'inevitable'
		},
		{
			id: '725',
			russianWord: 'неизбежно',
			englishWord: 'inevitably'
		},
		{
			id: '726',
			russianWord: 'заражать',
			englishWord: 'infect'
		},
		{
			id: '727',
			russianWord: 'инфекция',
			englishWord: 'infection'
		},
		{
			id: '728',
			russianWord: 'инфекционный',
			englishWord: 'infectious'
		},
		{
			id: '729',
			russianWord: 'влияние',
			englishWord: 'influence'
		},
		{
			id: '730',
			russianWord: 'сообщить',
			englishWord: 'inform'
		},
		{
			id: '731',
			russianWord: 'неофициальный',
			englishWord: 'informal'
		},
		{
			id: '732',
			russianWord: 'информация',
			englishWord: 'information'
		},
		{
			id: '733',
			russianWord: 'первоначальный',
			englishWord: 'initial'
		},
		{
			id: '734',
			russianWord: 'инициатива',
			englishWord: 'initiative'
		},
		{
			id: '735',
			russianWord: 'ранить',
			englishWord: 'injure'
		},
		{
			id: '736',
			russianWord: 'намереваться',
			englishWord: 'intend'
		},
		{
			id: '737',
			russianWord: 'намерение',
			englishWord: 'intention'
		},
		{
			id: '738',
			russianWord: 'интерес',
			englishWord: 'interest'
		},
		{
			id: '739',
			russianWord: 'интересный',
			englishWord: 'interesting'
		},
		{
			id: '740',
			russianWord: 'интерьер',
			englishWord: 'interior'
		},
		{
			id: '741',
			russianWord: 'внутренний',
			englishWord: 'internal'
		},
		{
			id: '742',
			russianWord: 'международный',
			englishWord: 'international'
		},
		{
			id: '743',
			russianWord: 'интернет',
			englishWord: 'internet'
		},
		{
			id: '744',
			russianWord: 'интерпретировать',
			englishWord: 'interpret'
		},
		{
			id: '745',
			russianWord: 'интерпретация',
			englishWord: 'interpretation'
		},
		{
			id: '746',
			russianWord: 'прерывать',
			englishWord: 'interrupt'
		},
		{
			id: '747',
			russianWord: 'перерыв',
			englishWord: 'interruption'
		},
		{
			id: '748',
			russianWord: 'интервал',
			englishWord: 'interval'
		},
		{
			id: '749',
			russianWord: 'интервью',
			englishWord: 'interview'
		},
		{
			id: '750',
			russianWord: 'в',
			englishWord: 'into'
		},
		{
			id: '751',
			russianWord: 'внедрять',
			englishWord: 'introduce'
		},
		{
			id: '752',
			russianWord: 'введение',
			englishWord: 'introduction'
		},
		{
			id: '753',
			russianWord: 'изобретать',
			englishWord: 'invent'
		},
		{
			id: '754',
			russianWord: 'изобретение',
			englishWord: 'invention'
		},
		{
			id: '755',
			russianWord: 'инвестировать',
			englishWord: 'invest'
		},
		{
			id: '756',
			russianWord: 'расследовать',
			englishWord: 'investigate'
		},
		{
			id: '757',
			russianWord: 'совместный',
			englishWord: 'joint'
		},
		{
			id: '758',
			russianWord: 'шутка',
			englishWord: 'joke'
		},
		{
			id: '759',
			russianWord: 'журналист',
			englishWord: 'journalist'
		},
		{
			id: '760',
			russianWord: 'путешествие',
			englishWord: 'journey'
		},
		{
			id: '761',
			russianWord: 'радость',
			englishWord: 'joy'
		},
		{
			id: '762',
			russianWord: 'судья',
			englishWord: 'judge'
		},
		{
			id: '763',
			russianWord: 'решение',
			englishWord: 'judgement'
		},
		{
			id: '764',
			russianWord: 'сок',
			englishWord: 'juice'
		},
		{
			id: '765',
			russianWord: 'июль',
			englishWord: 'july'
		},
		{
			id: '766',
			russianWord: 'прыжок',
			englishWord: 'jump'
		},
		{
			id: '767',
			russianWord: 'июнь',
			englishWord: 'june'
		},
		{
			id: '768',
			russianWord: 'младший',
			englishWord: 'junior'
		},
		{
			id: '769',
			russianWord: 'просто',
			englishWord: 'just'
		},
		{
			id: '770',
			russianWord: 'справедливость',
			englishWord: 'justice'
		},
		{
			id: '771',
			russianWord: 'оправдывать',
			englishWord: 'justify'
		},
		{
			id: '772',
			russianWord: 'острый',
			englishWord: 'keen'
		},
		{
			id: '773',
			russianWord: 'заинтересованы в',
			englishWord: 'keen on'
		},
		{
			id: '774',
			russianWord: 'держать',
			englishWord: 'keep'
		},
		{
			id: '775',
			russianWord: 'ключ',
			englishWord: 'key'
		},
		{
			id: '776',
			russianWord: 'клавиатура',
			englishWord: 'keyboard'
		},
		{
			id: '777',
			russianWord: 'удар',
			englishWord: 'kick'
		},
		{
			id: '778',
			russianWord: 'недостающий',
			englishWord: 'lacking'
		},
		{
			id: '779',
			russianWord: 'леди',
			englishWord: 'lady'
		},
		{
			id: '780',
			russianWord: 'озеро',
			englishWord: 'lake'
		},
		{
			id: '781',
			russianWord: 'лампа',
			englishWord: 'lamp'
		},
		{
			id: '782',
			russianWord: 'земля',
			englishWord: 'land'
		},
		{
			id: '783',
			russianWord: 'пейзаж',
			englishWord: 'landscape'
		},
		{
			id: '784',
			russianWord: 'переулок',
			englishWord: 'lane'
		},
		{
			id: '785',
			russianWord: 'язык',
			englishWord: 'language'
		},
		{
			id: '786',
			russianWord: 'большой',
			englishWord: 'large'
		},
		{
			id: '787',
			russianWord: 'последний',
			englishWord: 'last'
		},
		{
			id: '788',
			russianWord: 'поздно',
			englishWord: 'late'
		},
		{
			id: '789',
			russianWord: 'позже',
			englishWord: 'later'
		},
		{
			id: '790',
			russianWord: 'последний',
			englishWord: 'latest'
		},
		{
			id: '791',
			russianWord: 'последний',
			englishWord: 'latter'
		},
		{
			id: '792',
			russianWord: 'смеяться',
			englishWord: 'laugh'
		},
		{
			id: '793',
			russianWord: 'запуск',
			englishWord: 'launch'
		},
		{
			id: '794',
			russianWord: 'закон',
			englishWord: 'law'
		},
		{
			id: '795',
			russianWord: 'адвокат',
			englishWord: 'lawyer'
		},
		{
			id: '796',
			russianWord: 'лежать',
			englishWord: 'lay'
		},
		{
			id: '797',
			russianWord: 'слой',
			englishWord: 'layer'
		},
		{
			id: '798',
			russianWord: 'ленивый',
			englishWord: 'lazy'
		},
		{
			id: '799',
			russianWord: 'библиотека',
			englishWord: 'library'
		},
		{
			id: '800',
			russianWord: 'лицензия',
			englishWord: 'licence'
		},
		{
			id: '801',
			russianWord: 'лицензия',
			englishWord: 'license'
		},
		{
			id: '802',
			russianWord: 'крышка',
			englishWord: 'lid'
		},
		{
			id: '803',
			russianWord: 'ложь',
			englishWord: 'lie'
		},
		{
			id: '804',
			russianWord: 'жизнь',
			englishWord: 'life'
		},
		{
			id: '805',
			russianWord: 'лифт',
			englishWord: 'lift'
		},
		{
			id: '806',
			russianWord: 'свет',
			englishWord: 'light'
		},
		{
			id: '807',
			russianWord: 'легко',
			englishWord: 'lightly'
		},
		{
			id: '808',
			russianWord: 'вроде',
			englishWord: 'like'
		},
		{
			id: '809',
			russianWord: 'предел',
			englishWord: 'limit'
		},
		{
			id: '810',
			russianWord: 'линия',
			englishWord: 'line'
		},
		{
			id: '811',
			russianWord: 'ссылка',
			englishWord: 'link'
		},
		{
			id: '812',
			russianWord: 'губа',
			englishWord: 'lip'
		},
		{
			id: '813',
			russianWord: 'жидкий',
			englishWord: 'liquid'
		},
		{
			id: '814',
			russianWord: 'список',
			englishWord: 'list'
		},
		{
			id: '815',
			russianWord: 'литература',
			englishWord: 'literature'
		},
		{
			id: '816',
			russianWord: 'маленький',
			englishWord: 'little'
		},
		{
			id: '817',
			russianWord: 'жизнь',
			englishWord: 'living'
		},
		{
			id: '818',
			russianWord: 'нагрузка',
			englishWord: 'load'
		},
		{
			id: '819',
			russianWord: 'заем',
			englishWord: 'loan'
		},
		{
			id: '820',
			russianWord: 'ком',
			englishWord: 'lump'
		},
		{
			id: '821',
			russianWord: 'обед',
			englishWord: 'lunch'
		},
		{
			id: '822',
			russianWord: 'легкое',
			englishWord: 'lung'
		},
		{
			id: '823',
			russianWord: 'машина',
			englishWord: 'machine'
		},
		{
			id: '824',
			russianWord: 'машины',
			englishWord: 'machinery'
		},
		{
			id: '825',
			russianWord: 'сумасшедший',
			englishWord: 'mad'
		},
		{
			id: '826',
			russianWord: 'журнал',
			englishWord: 'magazine'
		},
		{
			id: '827',
			russianWord: 'магический',
			englishWord: 'magic'
		},
		{
			id: '828',
			russianWord: 'почта',
			englishWord: 'mail'
		},
		{
			id: '829',
			russianWord: 'основной',
			englishWord: 'main'
		},
		{
			id: '830',
			russianWord: 'главным образом',
			englishWord: 'mainly'
		},
		{
			id: '831',
			russianWord: 'поддерживать',
			englishWord: 'maintain'
		},
		{
			id: '832',
			russianWord: 'основной',
			englishWord: 'major'
		},
		{
			id: '833',
			russianWord: 'большинство',
			englishWord: 'majority'
		},
		{
			id: '834',
			russianWord: 'делать',
			englishWord: 'make'
		},
		{
			id: '835',
			russianWord: 'мужской',
			englishWord: 'male'
		},
		{
			id: '836',
			russianWord: 'торговый центр',
			englishWord: 'mall'
		},
		{
			id: '837',
			russianWord: 'человек',
			englishWord: 'man'
		},
		{
			id: '838',
			russianWord: 'управлять',
			englishWord: 'manage'
		},
		{
			id: '839',
			russianWord: 'управление',
			englishWord: 'management'
		},
		{
			id: '840',
			russianWord: 'менеджер',
			englishWord: 'manager'
		},
		{
			id: '841',
			russianWord: 'мэр',
			englishWord: 'mayor'
		},
		{
			id: '842',
			russianWord: 'еда',
			englishWord: 'meal'
		},
		{
			id: '843',
			russianWord: 'среднее',
			englishWord: 'mean'
		},
		{
			id: '844',
			russianWord: 'смысл',
			englishWord: 'meaning'
		},
		{
			id: '845',
			russianWord: 'средства',
			englishWord: 'means'
		},
		{
			id: '846',
			russianWord: 'тем временем',
			englishWord: 'meanwhile'
		},
		{
			id: '847',
			russianWord: 'мера',
			englishWord: 'measure'
		},
		{
			id: '848',
			russianWord: 'измерение',
			englishWord: 'measurement'
		},
		{
			id: '849',
			russianWord: 'мясо',
			englishWord: 'meat'
		},
		{
			id: '850',
			russianWord: 'встречаться',
			englishWord: 'meet'
		},
		{
			id: '851',
			russianWord: 'заседание',
			englishWord: 'meeting'
		},
		{
			id: '852',
			russianWord: 'расплав',
			englishWord: 'melt'
		},
		{
			id: '853',
			russianWord: 'член',
			englishWord: 'member'
		},
		{
			id: '854',
			russianWord: 'членство',
			englishWord: 'membership'
		},
		{
			id: '855',
			russianWord: 'память',
			englishWord: 'memory'
		},
		{
			id: '856',
			russianWord: 'умственный',
			englishWord: 'mental'
		},
		{
			id: '857',
			russianWord: 'упомянуть',
			englishWord: 'mention'
		},
		{
			id: '858',
			russianWord: 'меню',
			englishWord: 'menu'
		},
		{
			id: '859',
			russianWord: 'простой',
			englishWord: 'mere'
		},
		{
			id: '860',
			russianWord: 'беспорядок',
			englishWord: 'mess'
		},
		{
			id: '861',
			russianWord: 'сообщение',
			englishWord: 'message'
		},
		{
			id: '862',
			russianWord: 'ошибка',
			englishWord: 'mistake'
		},
		{
			id: '863',
			russianWord: 'ошибочный',
			englishWord: 'mistaken'
		},
		{
			id: '864',
			russianWord: 'смесь',
			englishWord: 'mix'
		},
		{
			id: '865',
			russianWord: 'смесь',
			englishWord: 'mixture'
		},
		{
			id: '867',
			russianWord: 'модель',
			englishWord: 'model'
		},
		{
			id: '868',
			russianWord: 'современный',
			englishWord: 'modern'
		},
		{
			id: '869',
			russianWord: 'момент',
			englishWord: 'moment'
		},
		{
			id: '870',
			russianWord: 'понедельник',
			englishWord: 'monday'
		},
		{
			id: '871',
			russianWord: 'деньги',
			englishWord: 'money'
		},
		{
			id: '872',
			russianWord: 'монитор',
			englishWord: 'monitor'
		},
		{
			id: '873',
			russianWord: 'месяц',
			englishWord: 'month'
		},
		{
			id: '874',
			russianWord: 'настроение',
			englishWord: 'mood'
		},
		{
			id: '875',
			russianWord: 'луна',
			englishWord: 'moon'
		},
		{
			id: '876',
			russianWord: 'моральный',
			englishWord: 'moral'
		},
		{
			id: '877',
			russianWord: 'больше',
			englishWord: 'more'
		},
		{
			id: '878',
			russianWord: 'кроме того',
			englishWord: 'moreover'
		},
		{
			id: '879',
			russianWord: 'утро',
			englishWord: 'morning'
		},
		{
			id: '880',
			russianWord: 'наиболее',
			englishWord: 'most'
		},
		{
			id: '881',
			russianWord: 'главным образом',
			englishWord: 'mostly'
		},
		{
			id: '882',
			russianWord: 'мать',
			englishWord: 'mother'
		},
		{
			id: '883',
			russianWord: 'таинственный',
			englishWord: 'mysterious'
		},
		{
			id: '884',
			russianWord: 'тайна',
			englishWord: 'mystery'
		},
		{
			id: '885',
			russianWord: 'гвоздь',
			englishWord: 'nail'
		},
		{
			id: '886',
			russianWord: 'имя',
			englishWord: 'name'
		},
		{
			id: '887',
			russianWord: 'узкий',
			englishWord: 'narrow'
		},
		{
			id: '888',
			russianWord: 'народ',
			englishWord: 'nation'
		},
		{
			id: '889',
			russianWord: 'национальный',
			englishWord: 'national'
		},
		{
			id: '890',
			russianWord: 'природный',
			englishWord: 'natural'
		},
		{
			id: '891',
			russianWord: 'характер',
			englishWord: 'nature'
		},
		{
			id: '893',
			russianWord: 'около',
			englishWord: 'near'
		},
		{
			id: '894',
			russianWord: 'рядом',
			englishWord: 'nearby'
		},
		{
			id: '895',
			russianWord: 'почти',
			englishWord: 'nearly'
		},
		{
			id: '896',
			russianWord: 'опрятный',
			englishWord: 'neat'
		},
		{
			id: '897',
			russianWord: 'аккуратно',
			englishWord: 'neatly'
		},
		{
			id: '898',
			russianWord: 'обязательно',
			englishWord: 'necessarily'
		},
		{
			id: '899',
			russianWord: 'необходимо',
			englishWord: 'necessary'
		},
		{
			id: '900',
			russianWord: 'шея',
			englishWord: 'neck'
		},
		{
			id: '901',
			russianWord: 'отрицательный',
			englishWord: 'negative'
		},
		{
			id: '902',
			russianWord: 'окрестности',
			englishWord: 'neighbourhood'
		},
		{
			id: '903',
			russianWord: 'ни',
			englishWord: 'neither'
		},
		{
			id: '904',
			russianWord: 'шумный',
			englishWord: 'noisy'
		},
		{
			id: '905',
			russianWord: 'чушь',
			englishWord: 'nonsense'
		},
		{
			id: '907',
			russianWord: 'нормальный',
			englishWord: 'normal'
		},
		{
			id: '908',
			russianWord: 'к северу',
			englishWord: 'north'
		},
		{
			id: '909',
			russianWord: 'северный',
			englishWord: 'northern'
		},
		{
			id: '910',
			russianWord: 'нос',
			englishWord: 'nose'
		},
		{
			id: '911',
			russianWord: 'не',
			englishWord: 'not'
		},
		{
			id: '912',
			russianWord: 'внимание',
			englishWord: 'note'
		},
		{
			id: '913',
			russianWord: 'уведомление',
			englishWord: 'notice'
		},
		{
			id: '914',
			russianWord: 'заметный',
			englishWord: 'noticeable'
		},
		{
			id: '915',
			russianWord: 'роман',
			englishWord: 'novel'
		},
		{
			id: '916',
			russianWord: 'ноябрь',
			englishWord: 'november'
		},
		{
			id: '918',
			russianWord: 'нигде',
			englishWord: 'nowhere'
		},
		{
			id: '919',
			russianWord: 'ядерный',
			englishWord: 'nuclear'
		},
		{
			id: '920',
			russianWord: 'медсестра',
			englishWord: 'nurse'
		},
		{
			id: '921',
			russianWord: 'гайка',
			englishWord: 'nut'
		},
		{
			id: '922',
			russianWord: 'повиноваться',
			englishWord: 'obey'
		},
		{
			id: '923',
			russianWord: 'объект',
			englishWord: 'object'
		},
		{
			id: '924',
			russianWord: 'цель',
			englishWord: 'objective'
		},
		{
			id: '925',
			russianWord: 'старый',
			englishWord: 'old'
		},
		{
			id: '926',
			russianWord: 'раз',
			englishWord: 'once'
		},
		{
			id: '927',
			russianWord: 'лук',
			englishWord: 'onion'
		},
		{
			id: '928',
			russianWord: 'только',
			englishWord: 'only'
		},
		{
			id: '929',
			russianWord: 'открытый',
			englishWord: 'open'
		},
		{
			id: '930',
			russianWord: 'открытие',
			englishWord: 'opening'
		},
		{
			id: '931',
			russianWord: 'открыто',
			englishWord: 'openly'
		},
		{
			id: '932',
			russianWord: 'работать',
			englishWord: 'operate'
		},
		{
			id: '933',
			russianWord: 'операция',
			englishWord: 'operation'
		},
		{
			id: '934',
			russianWord: 'мнение',
			englishWord: 'opinion'
		},
		{
			id: '935',
			russianWord: 'противник',
			englishWord: 'opponent'
		},
		{
			id: '936',
			russianWord: 'возможность',
			englishWord: 'opportunity'
		},
		{
			id: '937',
			russianWord: 'противиться',
			englishWord: 'oppose'
		},
		{
			id: '938',
			russianWord: 'против',
			englishWord: 'opposing'
		},
		{
			id: '939',
			russianWord: 'напротив',
			englishWord: 'opposite'
		},
		{
			id: '940',
			russianWord: 'оппозиция',
			englishWord: 'opposition'
		},
		{
			id: '941',
			russianWord: 'вариант',
			englishWord: 'option'
		},
		{
			id: '942',
			russianWord: 'или',
			englishWord: 'or'
		},
		{
			id: '943',
			russianWord: 'оранжевый',
			englishWord: 'orange'
		},
		{
			id: '944',
			russianWord: 'порядок',
			englishWord: 'order'
		},
		{
			id: '945',
			russianWord: 'обычный',
			englishWord: 'ordinary'
		},
		{
			id: '946',
			russianWord: 'темп',
			englishWord: 'pace'
		},
		{
			id: '947',
			russianWord: 'пакет',
			englishWord: 'pack'
		},
		{
			id: '948',
			russianWord: 'пакет',
			englishWord: 'package'
		},
		{
			id: '949',
			russianWord: 'упаковка',
			englishWord: 'packaging'
		},
		{
			id: '950',
			russianWord: 'пакет',
			englishWord: 'packet'
		},
		{
			id: '951',
			russianWord: 'страница',
			englishWord: 'page'
		},
		{
			id: '952',
			russianWord: 'боль',
			englishWord: 'pain'
		},
		{
			id: '953',
			russianWord: 'болезненный',
			englishWord: 'painful'
		},
		{
			id: '954',
			russianWord: 'краска',
			englishWord: 'paint'
		},
		{
			id: '955',
			russianWord: 'художник',
			englishWord: 'painter'
		},
		{
			id: '956',
			russianWord: 'живопись',
			englishWord: 'painting'
		},
		{
			id: '957',
			russianWord: 'пара',
			englishWord: 'pair'
		},
		{
			id: '958',
			russianWord: 'дворец',
			englishWord: 'palace'
		},
		{
			id: '959',
			russianWord: 'бледный',
			englishWord: 'pale'
		},
		{
			id: '960',
			russianWord: 'сковорода',
			englishWord: 'pan'
		},
		{
			id: '961',
			russianWord: 'панель',
			englishWord: 'panel'
		},
		{
			id: '962',
			russianWord: 'брюки',
			englishWord: 'pants'
		},
		{
			id: '963',
			russianWord: 'бумага',
			englishWord: 'paper'
		},
		{
			id: '964',
			russianWord: 'параллельный',
			englishWord: 'parallel'
		},
		{
			id: '965',
			russianWord: 'родитель',
			englishWord: 'parent'
		},
		{
			id: '966',
			russianWord: 'парк',
			englishWord: 'park'
		},
		{
			id: '967',
			russianWord: 'мир',
			englishWord: 'peace'
		},
		{
			id: '968',
			russianWord: 'мирный',
			englishWord: 'peaceful'
		},
		{
			id: '969',
			russianWord: 'пик',
			englishWord: 'peak'
		},
		{
			id: '970',
			russianWord: 'ручка',
			englishWord: 'pen'
		},
		{
			id: '971',
			russianWord: 'пенсов',
			englishWord: 'pence'
		},
		{
			id: '972',
			russianWord: 'карандаш',
			englishWord: 'pencil'
		},
		{
			id: '973',
			russianWord: 'пенни',
			englishWord: 'penny'
		},
		{
			id: '974',
			russianWord: 'пенсия',
			englishWord: 'pension'
		},
		{
			id: '975',
			russianWord: 'люди',
			englishWord: 'people'
		},
		{
			id: '976',
			russianWord: 'перец',
			englishWord: 'pepper'
		},
		{
			id: '977',
			russianWord: 'совершенный',
			englishWord: 'perfect'
		},
		{
			id: '978',
			russianWord: 'отлично',
			englishWord: 'perfectly'
		},
		{
			id: '979',
			russianWord: 'выполнять',
			englishWord: 'perform'
		},
		{
			id: '980',
			russianWord: 'производительное',
			englishWord: 'performance'
		},
		{
			id: '981',
			russianWord: 'исполнитель',
			englishWord: 'performer'
		},
		{
			id: '982',
			russianWord: 'может быть',
			englishWord: 'perhaps'
		},
		{
			id: '983',
			russianWord: 'период',
			englishWord: 'period'
		},
		{
			id: '984',
			russianWord: 'постоянный',
			englishWord: 'permanent'
		},
		{
			id: '985',
			russianWord: 'постоянно',
			englishWord: 'permanently'
		},
		{
			id: '986',
			russianWord: 'разрешение',
			englishWord: 'permission'
		},
		{
			id: '987',
			russianWord: 'разрешение',
			englishWord: 'permit'
		},
		{
			id: '988',
			russianWord: 'свая',
			englishWord: 'pile'
		},
		{
			id: '989',
			russianWord: 'таблетка',
			englishWord: 'pill'
		},
		{
			id: '990',
			russianWord: 'пилот',
			englishWord: 'pilot'
		},
		{
			id: '991',
			russianWord: 'штифт',
			englishWord: 'pin'
		},
		{
			id: '992',
			russianWord: 'розовый',
			englishWord: 'pink'
		},
		{
			id: '993',
			russianWord: 'пинта',
			englishWord: 'pint'
		},
		{
			id: '994',
			russianWord: 'труба',
			englishWord: 'pipe'
		},
		{
			id: '995',
			russianWord: 'шаг',
			englishWord: 'pitch'
		},
		{
			id: '996',
			russianWord: 'жалость',
			englishWord: 'pity'
		},
		{
			id: '997',
			russianWord: 'место',
			englishWord: 'place'
		},
		{
			id: '998',
			russianWord: 'простой',
			englishWord: 'plain'
		},
		{
			id: '999',
			russianWord: 'план',
			englishWord: 'plan'
		},
		{
			id: '1000',
			russianWord: 'самолет',
			englishWord: 'plane'
		},
		{
			id: '1001',
			russianWord: 'планета',
			englishWord: 'planet'
		},
		{
			id: '1002',
			russianWord: 'планирование',
			englishWord: 'planning'
		},
		{
			id: '1003',
			russianWord: 'завод',
			englishWord: 'plant'
		},
		{
			id: '1004',
			russianWord: 'пластиковый',
			englishWord: 'plastic'
		},
		{
			id: '1005',
			russianWord: 'плита',
			englishWord: 'plate'
		},
		{
			id: '1006',
			russianWord: 'платформа',
			englishWord: 'platform'
		},
		{
			id: '1007',
			russianWord: 'играть',
			englishWord: 'play'
		},
		{
			id: '1008',
			russianWord: 'игрок',
			englishWord: 'player'
		},
		{
			id: '1009',
			russianWord: 'политик',
			englishWord: 'politician'
		},
		{
			id: '1010',
			russianWord: 'политика',
			englishWord: 'politics'
		},
		{
			id: '1011',
			russianWord: 'загрязнение',
			englishWord: 'pollution'
		},
		{
			id: '1012',
			russianWord: 'бассейн',
			englishWord: 'pool'
		},
		{
			id: '1013',
			russianWord: 'бедные',
			englishWord: 'poor'
		},
		{
			id: '1014',
			russianWord: 'хлопнуть',
			englishWord: 'pop'
		},
		{
			id: '1015',
			russianWord: 'популярный',
			englishWord: 'popular'
		},
		{
			id: '1016',
			russianWord: 'население',
			englishWord: 'population'
		},
		{
			id: '1017',
			russianWord: 'порт',
			englishWord: 'port'
		},
		{
			id: '1018',
			russianWord: 'поза',
			englishWord: 'pose'
		},
		{
			id: '1019',
			russianWord: 'положение',
			englishWord: 'position'
		},
		{
			id: '1020',
			russianWord: 'положительный',
			englishWord: 'positive'
		},
		{
			id: '1021',
			russianWord: 'обладать',
			englishWord: 'possess'
		},
		{
			id: '1022',
			russianWord: 'владение',
			englishWord: 'possession'
		},
		{
			id: '1023',
			russianWord: 'возможность',
			englishWord: 'possibility'
		},
		{
			id: '1024',
			russianWord: 'возможное',
			englishWord: 'possible'
		},
		{
			id: '1025',
			russianWord: 'возможно',
			englishWord: 'possibly'
		},
		{
			id: '1026',
			russianWord: 'пост',
			englishWord: 'post'
		},
		{
			id: '1027',
			russianWord: 'горшок',
			englishWord: 'pot'
		},
		{
			id: '1028',
			russianWord: 'картофель',
			englishWord: 'potato'
		},
		{
			id: '1029',
			russianWord: 'потенциал',
			englishWord: 'potential'
		},
		{
			id: '1030',
			russianWord: 'президент',
			englishWord: 'president'
		},
		{
			id: '1031',
			russianWord: 'пресс',
			englishWord: 'press'
		},
		{
			id: '1032',
			russianWord: 'давление',
			englishWord: 'pressure'
		},
		{
			id: '1034',
			russianWord: 'притворяться',
			englishWord: 'pretend'
		},
		{
			id: '1035',
			russianWord: 'довольно',
			englishWord: 'pretty'
		},
		{
			id: '1036',
			russianWord: 'предотвращать',
			englishWord: 'prevent'
		},
		{
			id: '1037',
			russianWord: 'предыдущий',
			englishWord: 'previous'
		},
		{
			id: '1038',
			russianWord: 'предварительно',
			englishWord: 'previously'
		},
		{
			id: '1039',
			russianWord: 'цена',
			englishWord: 'price'
		},
		{
			id: '1040',
			russianWord: 'гордость',
			englishWord: 'pride'
		},
		{
			id: '1041',
			russianWord: 'священник',
			englishWord: 'priest'
		},
		{
			id: '1042',
			russianWord: 'в первую очередь',
			englishWord: 'primarily'
		},
		{
			id: '1043',
			russianWord: 'первичный',
			englishWord: 'primary'
		},
		{
			id: '1044',
			russianWord: 'князь',
			englishWord: 'prince'
		},
		{
			id: '1045',
			russianWord: 'принцесса',
			englishWord: 'princess'
		},
		{
			id: '1046',
			russianWord: 'принцип',
			englishWord: 'principle'
		},
		{
			id: '1047',
			russianWord: 'печать',
			englishWord: 'print'
		},
		{
			id: '1048',
			russianWord: 'принтер',
			englishWord: 'printer'
		},
		{
			id: '1049',
			russianWord: 'печать',
			englishWord: 'printing'
		},
		{
			id: '1050',
			russianWord: 'предварительный',
			englishWord: 'prior'
		},
		{
			id: '1051',
			russianWord: 'обещание',
			englishWord: 'promise'
		},
		{
			id: '1052',
			russianWord: 'содействовать',
			englishWord: 'promote'
		},
		{
			id: '1053',
			russianWord: 'содействие',
			englishWord: 'promotion'
		},
		{
			id: '1054',
			russianWord: 'быстро',
			englishWord: 'prompt'
		},
		{
			id: '1056',
			russianWord: 'произносить',
			englishWord: 'pronounce'
		},
		{
			id: '1057',
			russianWord: 'произношение',
			englishWord: 'pronunciation'
		},
		{
			id: '1058',
			russianWord: 'доказательство',
			englishWord: 'proof'
		},
		{
			id: '1059',
			russianWord: 'надлежащий',
			englishWord: 'proper'
		},
		{
			id: '1060',
			russianWord: 'правильно',
			englishWord: 'properly'
		},
		{
			id: '1061',
			russianWord: 'имущество',
			englishWord: 'property'
		},
		{
			id: '1062',
			russianWord: 'доля',
			englishWord: 'proportion'
		},
		{
			id: '1063',
			russianWord: 'предложение',
			englishWord: 'proposal'
		},
		{
			id: '1064',
			russianWord: 'предлагать',
			englishWord: 'propose'
		},
		{
			id: '1065',
			russianWord: 'перспектива',
			englishWord: 'prospect'
		},
		{
			id: '1066',
			russianWord: 'защищать',
			englishWord: 'protect'
		},
		{
			id: '1067',
			russianWord: 'защита',
			englishWord: 'protection'
		},
		{
			id: '1068',
			russianWord: 'протест',
			englishWord: 'protest'
		},
		{
			id: '1069',
			russianWord: 'гордый',
			englishWord: 'proud'
		},
		{
			id: '1070',
			russianWord: 'гордо',
			englishWord: 'proudly'
		},
		{
			id: '1071',
			russianWord: 'доказывать',
			englishWord: 'prove'
		},
		{
			id: '1072',
			russianWord: 'качество',
			englishWord: 'quality'
		},
		{
			id: '1073',
			russianWord: 'количество',
			englishWord: 'quantity'
		},
		{
			id: '1074',
			russianWord: 'четверть',
			englishWord: 'quarter'
		},
		{
			id: '1075',
			russianWord: 'королева',
			englishWord: 'queen'
		},
		{
			id: '1076',
			russianWord: 'вопрос',
			englishWord: 'question'
		},
		{
			id: '1077',
			russianWord: 'быстрый',
			englishWord: 'quick'
		},
		{
			id: '1078',
			russianWord: 'быстро',
			englishWord: 'quickly'
		},
		{
			id: '1079',
			russianWord: 'тихий',
			englishWord: 'quiet'
		},
		{
			id: '1080',
			russianWord: 'спокойно',
			englishWord: 'quietly'
		},
		{
			id: '1081',
			russianWord: 'выход',
			englishWord: 'quit'
		},
		{
			id: '1082',
			russianWord: 'вполне',
			englishWord: 'quite'
		},
		{
			id: '1083',
			russianWord: 'цитата',
			englishWord: 'quote'
		},
		{
			id: '1084',
			russianWord: 'гонки',
			englishWord: 'race'
		},
		{
			id: '1085',
			russianWord: 'гоночный',
			englishWord: 'racing'
		},
		{
			id: '1086',
			russianWord: 'радио',
			englishWord: 'radio'
		},
		{
			id: '1087',
			russianWord: 'рельс',
			englishWord: 'rail'
		},
		{
			id: '1088',
			russianWord: 'дождь',
			englishWord: 'rain'
		},
		{
			id: '1089',
			russianWord: 'поднимать',
			englishWord: 'raise'
		},
		{
			id: '1090',
			russianWord: 'диапазон',
			englishWord: 'range'
		},
		{
			id: '1091',
			russianWord: 'звание',
			englishWord: 'rank'
		},
		{
			id: '1092',
			russianWord: 'быстрый',
			englishWord: 'rapid'
		},
		{
			id: '1093',
			russianWord: 'получение',
			englishWord: 'receipt'
		},
		{
			id: '1094',
			russianWord: 'получать',
			englishWord: 'receive'
		},
		{
			id: '1095',
			russianWord: 'последний',
			englishWord: 'recent'
		},
		{
			id: '1097',
			russianWord: 'прием',
			englishWord: 'reception'
		},
		{
			id: '1098',
			russianWord: 'рассчитывать',
			englishWord: 'reckon'
		},
		{
			id: '1099',
			russianWord: 'признание',
			englishWord: 'recognition'
		},
		{
			id: '1100',
			russianWord: 'признавать',
			englishWord: 'recognize'
		},
		{
			id: '1101',
			russianWord: 'рекомендовать',
			englishWord: 'recommend'
		},
		{
			id: '1102',
			russianWord: 'запись',
			englishWord: 'record'
		},
		{
			id: '1103',
			russianWord: 'запись',
			englishWord: 'recording'
		},
		{
			id: '1104',
			russianWord: 'восстанавливать',
			englishWord: 'recover'
		},
		{
			id: '1105',
			russianWord: 'ссылка',
			englishWord: 'reference'
		},
		{
			id: '1106',
			russianWord: 'отражать',
			englishWord: 'reflect'
		},
		{
			id: '1107',
			russianWord: 'реформа',
			englishWord: 'reform'
		},
		{
			id: '1108',
			russianWord: 'холодильник',
			englishWord: 'refrigerator'
		},
		{
			id: '1109',
			russianWord: 'отказ',
			englishWord: 'refusal'
		},
		{
			id: '1110',
			russianWord: 'отказывать',
			englishWord: 'refuse'
		},
		{
			id: '1111',
			russianWord: 'отношение',
			englishWord: 'regard'
		},
		{
			id: '1112',
			russianWord: 'о',
			englishWord: 'regarding'
		},
		{
			id: '1113',
			russianWord: 'область',
			englishWord: 'region'
		},
		{
			id: '1114',
			russianWord: 'замечание',
			englishWord: 'remark'
		},
		{
			id: '1115',
			russianWord: 'замечательный',
			englishWord: 'remarkable'
		},
		{
			id: '1116',
			russianWord: 'замечательно',
			englishWord: 'remarkably'
		},
		{
			id: '1117',
			russianWord: 'запомнить',
			englishWord: 'remember'
		},
		{
			id: '1118',
			russianWord: 'напоминать',
			englishWord: 'remind'
		},
		{
			id: '1119',
			russianWord: 'удаленный',
			englishWord: 'remote'
		},
		{
			id: '1120',
			russianWord: 'удаление',
			englishWord: 'removal'
		},
		{
			id: '1121',
			russianWord: 'удаление',
			englishWord: 'remove'
		},
		{
			id: '1122',
			russianWord: 'аренда',
			englishWord: 'rent'
		},
		{
			id: '1123',
			russianWord: 'ремонт',
			englishWord: 'repair'
		},
		{
			id: '1124',
			russianWord: 'повторять',
			englishWord: 'repeat'
		},
		{
			id: '1125',
			russianWord: 'заменять',
			englishWord: 'replace'
		},
		{
			id: '1126',
			russianWord: 'ответ',
			englishWord: 'reply'
		},
		{
			id: '1127',
			russianWord: 'доклад',
			englishWord: 'report'
		},
		{
			id: '1128',
			russianWord: 'представлять',
			englishWord: 'represent'
		},
		{
			id: '1129',
			russianWord: 'представитель',
			englishWord: 'representative'
		},
		{
			id: '1130',
			russianWord: 'воспроизводить',
			englishWord: 'reproduce'
		},
		{
			id: '1131',
			russianWord: 'репутация',
			englishWord: 'reputation'
		},
		{
			id: '1132',
			russianWord: 'запрос',
			englishWord: 'request'
		},
		{
			id: '1133',
			russianWord: 'требовать',
			englishWord: 'require'
		},
		{
			id: '1134',
			russianWord: 'требование',
			englishWord: 'requirement'
		},
		{
			id: '1135',
			russianWord: 'сохранять',
			englishWord: 'retain'
		},
		{
			id: '1136',
			russianWord: 'пенсию',
			englishWord: 'retire'
		},
		{
			id: '1137',
			russianWord: 'уход на пенсию',
			englishWord: 'retirement'
		},
		{
			id: '1138',
			russianWord: 'возвращение',
			englishWord: 'return'
		},
		{
			id: '1139',
			russianWord: 'раскрывать',
			englishWord: 'reveal'
		},
		{
			id: '1140',
			russianWord: 'обратный',
			englishWord: 'reverse'
		},
		{
			id: '1141',
			russianWord: 'обзор',
			englishWord: 'review'
		},
		{
			id: '1142',
			russianWord: 'пересматривать',
			englishWord: 'revise'
		},
		{
			id: '1143',
			russianWord: 'пересмотр',
			englishWord: 'revision'
		},
		{
			id: '1144',
			russianWord: 'революция',
			englishWord: 'revolution'
		},
		{
			id: '1145',
			russianWord: 'вознаграждение',
			englishWord: 'reward'
		},
		{
			id: '1146',
			russianWord: 'ритм',
			englishWord: 'rhythm'
		},
		{
			id: '1147',
			russianWord: 'рис',
			englishWord: 'rice'
		},
		{
			id: '1148',
			russianWord: 'богатый',
			englishWord: 'rich'
		},
		{
			id: '1149',
			russianWord: 'ездить',
			englishWord: 'ride'
		},
		{
			id: '1150',
			russianWord: 'всадник',
			englishWord: 'rider'
		},
		{
			id: '1151',
			russianWord: 'смешной',
			englishWord: 'ridiculous'
		},
		{
			id: '1152',
			russianWord: 'верховая езда',
			englishWord: 'riding'
		},
		{
			id: '1153',
			russianWord: 'право',
			englishWord: 'right'
		},
		{
			id: '1154',
			russianWord: 'справедливо',
			englishWord: 'rightly'
		},
		{
			id: '1155',
			russianWord: 'кольцо',
			englishWord: 'ring'
		},
		{
			id: '1156',
			russianWord: 'каучук',
			englishWord: 'rubber'
		},
		{
			id: '1157',
			russianWord: 'мусор',
			englishWord: 'rubbish'
		},
		{
			id: '1158',
			russianWord: 'грубый',
			englishWord: 'rude'
		},
		{
			id: '1159',
			russianWord: 'гибель',
			englishWord: 'ruin'
		},
		{
			id: '1160',
			russianWord: 'правило',
			englishWord: 'rule'
		},
		{
			id: '1161',
			russianWord: 'правитель',
			englishWord: 'ruler'
		},
		{
			id: '1162',
			russianWord: 'слух',
			englishWord: 'rumour'
		},
		{
			id: '1163',
			russianWord: 'бежать',
			englishWord: 'run'
		},
		{
			id: '1164',
			russianWord: 'бегун',
			englishWord: 'runner'
		},
		{
			id: '1165',
			russianWord: 'работа',
			englishWord: 'running'
		},
		{
			id: '1166',
			russianWord: 'сельский',
			englishWord: 'rural'
		},
		{
			id: '1167',
			russianWord: 'торопиться',
			englishWord: 'rush'
		},
		{
			id: '1168',
			russianWord: 'мешок',
			englishWord: 'sack'
		},
		{
			id: '1169',
			russianWord: 'печальный',
			englishWord: 'sad'
		},
		{
			id: '1170',
			russianWord: 'грустно',
			englishWord: 'sadly'
		},
		{
			id: '1171',
			russianWord: 'печаль',
			englishWord: 'sadness'
		},
		{
			id: '1172',
			russianWord: 'безопасный',
			englishWord: 'safe'
		},
		{
			id: '1173',
			russianWord: 'безопасность',
			englishWord: 'safety'
		},
		{
			id: '1174',
			russianWord: 'парус',
			englishWord: 'sail'
		},
		{
			id: '1175',
			russianWord: 'парусный спорт',
			englishWord: 'sailing'
		},
		{
			id: '1176',
			russianWord: 'матрос',
			englishWord: 'sailor'
		},
		{
			id: '1177',
			russianWord: 'научный',
			englishWord: 'scientific'
		},
		{
			id: '1178',
			russianWord: 'ученый',
			englishWord: 'scientist'
		},
		{
			id: '1179',
			russianWord: 'ножницы',
			englishWord: 'scissors'
		},
		{
			id: '1180',
			russianWord: 'счет',
			englishWord: 'score'
		},
		{
			id: '1181',
			russianWord: 'царапина',
			englishWord: 'scratch'
		},
		{
			id: '1182',
			russianWord: 'вопль',
			englishWord: 'scream'
		},
		{
			id: '1183',
			russianWord: 'экран',
			englishWord: 'screen'
		},
		{
			id: '1184',
			russianWord: 'винт',
			englishWord: 'screw'
		},
		{
			id: '1185',
			russianWord: 'море',
			englishWord: 'sea'
		},
		{
			id: '1186',
			russianWord: 'печать',
			englishWord: 'seal'
		},
		{
			id: '1187',
			russianWord: 'поиск',
			englishWord: 'search'
		},
		{
			id: '1188',
			russianWord: 'сезон',
			englishWord: 'season'
		},
		{
			id: '1189',
			russianWord: 'место',
			englishWord: 'seat'
		},
		{
			id: '1190',
			russianWord: 'второй',
			englishWord: 'second'
		},
		{
			id: '1191',
			russianWord: 'второй',
			englishWord: 'secondary'
		},
		{
			id: '1192',
			russianWord: 'тайный',
			englishWord: 'secret'
		},
		{
			id: '1193',
			russianWord: 'секретарь',
			englishWord: 'secretary'
		},
		{
			id: '1194',
			russianWord: 'тайно',
			englishWord: 'secretly'
		},
		{
			id: '1195',
			russianWord: 'раздел',
			englishWord: 'section'
		},
		{
			id: '1196',
			russianWord: 'сектор',
			englishWord: 'sector'
		},
		{
			id: '1197',
			russianWord: 'безопасный',
			englishWord: 'secure'
		},
		{
			id: '1198',
			russianWord: 'слуга',
			englishWord: 'servant'
		},
		{
			id: '1199',
			russianWord: 'служить',
			englishWord: 'serve'
		},
		{
			id: '1200',
			russianWord: 'обслуживание',
			englishWord: 'service'
		},
		{
			id: '1201',
			russianWord: 'сессия',
			englishWord: 'session'
		},
		{
			id: '1202',
			russianWord: 'набор',
			englishWord: 'set'
		},
		{
			id: '1203',
			russianWord: 'урегулировать',
			englishWord: 'settle'
		},
		{
			id: '1204',
			russianWord: 'несколько',
			englishWord: 'several'
		},
		{
			id: '1205',
			russianWord: 'тяжелый',
			englishWord: 'severe'
		},
		{
			id: '1206',
			russianWord: 'шить',
			englishWord: 'sew'
		},
		{
			id: '1207',
			russianWord: 'шитье',
			englishWord: 'sewing'
		},
		{
			id: '1209',
			russianWord: 'половой',
			englishWord: 'sexual'
		},
		{
			id: '1210',
			russianWord: 'тень',
			englishWord: 'shade'
		},
		{
			id: '1211',
			russianWord: 'тень',
			englishWord: 'shadow'
		},
		{
			id: '1212',
			russianWord: 'трясти',
			englishWord: 'shake'
		},
		{
			id: '1213',
			russianWord: 'мелкий',
			englishWord: 'shallow'
		},
		{
			id: '1214',
			russianWord: 'позор',
			englishWord: 'shame'
		},
		{
			id: '1215',
			russianWord: 'форма',
			englishWord: 'shape'
		},
		{
			id: '1216',
			russianWord: 'доля',
			englishWord: 'share'
		},
		{
			id: '1217',
			russianWord: 'острый',
			englishWord: 'sharp'
		},
		{
			id: '1218',
			russianWord: 'резко',
			englishWord: 'sharply'
		},
		{
			id: '1219',
			russianWord: 'плечо',
			englishWord: 'shoulder'
		},
		{
			id: '1220',
			russianWord: 'рупор',
			englishWord: 'shout'
		},
		{
			id: '1221',
			russianWord: 'шоу',
			englishWord: 'show'
		},
		{
			id: '1222',
			russianWord: 'душ',
			englishWord: 'shower'
		},
		{
			id: '1223',
			russianWord: 'закрывать',
			englishWord: 'shut'
		},
		{
			id: '1224',
			russianWord: 'застенчивый',
			englishWord: 'shy'
		},
		{
			id: '1225',
			russianWord: 'больной',
			englishWord: 'sick'
		},
		{
			id: '1226',
			russianWord: 'сторона',
			englishWord: 'side'
		},
		{
			id: '1227',
			russianWord: 'боком',
			englishWord: 'sideways'
		},
		{
			id: '1228',
			russianWord: 'взгляд',
			englishWord: 'sight'
		},
		{
			id: '1229',
			russianWord: 'знак',
			englishWord: 'sign'
		},
		{
			id: '1230',
			russianWord: 'сигнал',
			englishWord: 'signal'
		},
		{
			id: '1231',
			russianWord: 'подпись',
			englishWord: 'signature'
		},
		{
			id: '1232',
			russianWord: 'значительный',
			englishWord: 'significant'
		},
		{
			id: '1233',
			russianWord: 'существенно',
			englishWord: 'significantly'
		},
		{
			id: '1234',
			russianWord: 'молчание',
			englishWord: 'silence'
		},
		{
			id: '1235',
			russianWord: 'молчаливый',
			englishWord: 'silent'
		},
		{
			id: '1236',
			russianWord: 'шелк',
			englishWord: 'silk'
		},
		{
			id: '1237',
			russianWord: 'глупый',
			englishWord: 'silly'
		},
		{
			id: '1238',
			russianWord: 'серебро',
			englishWord: 'silver'
		},
		{
			id: '1239',
			russianWord: 'аналогичный',
			englishWord: 'similar'
		},
		{
			id: '1240',
			russianWord: 'спать',
			englishWord: 'sleep'
		},
		{
			id: '1241',
			russianWord: 'рукав',
			englishWord: 'sleeve'
		},
		{
			id: '1242',
			russianWord: 'ломтик',
			englishWord: 'slice'
		},
		{
			id: '1243',
			russianWord: 'слайд',
			englishWord: 'slide'
		},
		{
			id: '1244',
			russianWord: 'незначительный',
			englishWord: 'slight'
		},
		{
			id: '1245',
			russianWord: 'немного',
			englishWord: 'slightly'
		},
		{
			id: '1246',
			russianWord: 'скольжение',
			englishWord: 'slip'
		},
		{
			id: '1247',
			russianWord: 'наклон',
			englishWord: 'slope'
		},
		{
			id: '1248',
			russianWord: 'медленный',
			englishWord: 'slow'
		},
		{
			id: '1249',
			russianWord: 'медленно',
			englishWord: 'slowly'
		},
		{
			id: '1250',
			russianWord: 'небольшой',
			englishWord: 'small'
		},
		{
			id: '1251',
			russianWord: 'умный',
			englishWord: 'smart'
		},
		{
			id: '1252',
			russianWord: 'разгромить',
			englishWord: 'smash'
		},
		{
			id: '1253',
			russianWord: 'пахнуть',
			englishWord: 'smell'
		},
		{
			id: '1254',
			russianWord: 'улыбка',
			englishWord: 'smile'
		},
		{
			id: '1255',
			russianWord: 'курить',
			englishWord: 'smoke'
		},
		{
			id: '1256',
			russianWord: 'курение',
			englishWord: 'smoking'
		},
		{
			id: '1257',
			russianWord: 'плавный',
			englishWord: 'smooth'
		},
		{
			id: '1258',
			russianWord: 'гладко',
			englishWord: 'smoothly'
		},
		{
			id: '1259',
			russianWord: 'змея',
			englishWord: 'snake'
		},
		{
			id: '1260',
			russianWord: 'снег',
			englishWord: 'snow'
		},
		{
			id: '1261',
			russianWord: 'песня',
			englishWord: 'song'
		},
		{
			id: '1262',
			russianWord: 'скоро',
			englishWord: 'soon'
		},
		{
			id: '1263',
			russianWord: 'больной',
			englishWord: 'sore'
		},
		{
			id: '1264',
			russianWord: 'извините',
			englishWord: 'sorry'
		},
		{
			id: '1265',
			russianWord: 'сортировать',
			englishWord: 'sort'
		},
		{
			id: '1266',
			russianWord: 'душа',
			englishWord: 'soul'
		},
		{
			id: '1267',
			russianWord: 'звук',
			englishWord: 'sound'
		},
		{
			id: '1268',
			russianWord: 'суп',
			englishWord: 'soup'
		},
		{
			id: '1269',
			russianWord: 'кислый',
			englishWord: 'sour'
		},
		{
			id: '1270',
			russianWord: 'источник',
			englishWord: 'source'
		},
		{
			id: '1271',
			russianWord: 'на юг',
			englishWord: 'south'
		},
		{
			id: '1272',
			russianWord: 'южный',
			englishWord: 'southern'
		},
		{
			id: '1273',
			russianWord: 'пространство',
			englishWord: 'space'
		},
		{
			id: '1274',
			russianWord: 'запасной',
			englishWord: 'spare'
		},
		{
			id: '1275',
			russianWord: 'говорить',
			englishWord: 'speak'
		},
		{
			id: '1276',
			russianWord: 'оратор',
			englishWord: 'speaker'
		},
		{
			id: '1277',
			russianWord: 'специальный',
			englishWord: 'special'
		},
		{
			id: '1278',
			russianWord: 'специалист',
			englishWord: 'specialist'
		},
		{
			id: '1279',
			russianWord: 'конкретный',
			englishWord: 'specific'
		},
		{
			id: '1280',
			russianWord: 'речь',
			englishWord: 'speech'
		},
		{
			id: '1281',
			russianWord: 'заклинание',
			englishWord: 'spell'
		},
		{
			id: '1282',
			russianWord: 'этап',
			englishWord: 'stage'
		},
		{
			id: '1283',
			russianWord: 'ступень',
			englishWord: 'stair'
		},
		{
			id: '1284',
			russianWord: 'печать',
			englishWord: 'stamp'
		},
		{
			id: '1285',
			russianWord: 'стенд',
			englishWord: 'stand'
		},
		{
			id: '1286',
			russianWord: 'вставать',
			englishWord: 'stand up'
		},
		{
			id: '1287',
			russianWord: 'стандартный',
			englishWord: 'standard'
		},
		{
			id: '1288',
			russianWord: 'звезда',
			englishWord: 'star'
		},
		{
			id: '1289',
			russianWord: 'смотреть',
			englishWord: 'stare'
		},
		{
			id: '1290',
			russianWord: 'начало',
			englishWord: 'start'
		},
		{
			id: '1291',
			russianWord: 'состояние',
			englishWord: 'state'
		},
		{
			id: '1292',
			russianWord: 'заявление',
			englishWord: 'statement'
		},
		{
			id: '1293',
			russianWord: 'станция',
			englishWord: 'station'
		},
		{
			id: '1294',
			russianWord: 'статуя',
			englishWord: 'statue'
		},
		{
			id: '1295',
			russianWord: 'статус',
			englishWord: 'status'
		},
		{
			id: '1296',
			russianWord: 'остановиться',
			englishWord: 'stay'
		},
		{
			id: '1297',
			russianWord: 'постоянно',
			englishWord: 'steadily'
		},
		{
			id: '1298',
			russianWord: 'неуклонный',
			englishWord: 'steady'
		},
		{
			id: '1299',
			russianWord: 'украсть',
			englishWord: 'steal'
		},
		{
			id: '1300',
			russianWord: 'пар',
			englishWord: 'steam'
		},
		{
			id: '1301',
			russianWord: 'сталь',
			englishWord: 'steel'
		},
		{
			id: '1302',
			russianWord: 'крутой',
			englishWord: 'steep'
		},
		{
			id: '1303',
			russianWord: 'странный',
			englishWord: 'strange'
		},
		{
			id: '1304',
			russianWord: 'незнакомец',
			englishWord: 'stranger'
		},
		{
			id: '1305',
			russianWord: 'стратегия',
			englishWord: 'strategy'
		},
		{
			id: '1306',
			russianWord: 'поток',
			englishWord: 'stream'
		},
		{
			id: '1307',
			russianWord: 'улица',
			englishWord: 'street'
		},
		{
			id: '1308',
			russianWord: 'прочность',
			englishWord: 'strength'
		},
		{
			id: '1309',
			russianWord: 'стресс',
			englishWord: 'stress'
		},
		{
			id: '1310',
			russianWord: 'растягивать',
			englishWord: 'stretch'
		},
		{
			id: '1311',
			russianWord: 'строгий',
			englishWord: 'strict'
		},
		{
			id: '1312',
			russianWord: 'строго',
			englishWord: 'strictly'
		},
		{
			id: '1313',
			russianWord: 'забастовка',
			englishWord: 'strike'
		},
		{
			id: '1314',
			russianWord: 'поразительный',
			englishWord: 'striking'
		},
		{
			id: '1315',
			russianWord: 'строка',
			englishWord: 'string'
		},
		{
			id: '1316',
			russianWord: 'полоса',
			englishWord: 'strip'
		},
		{
			id: '1317',
			russianWord: 'полоса',
			englishWord: 'stripe'
		},
		{
			id: '1318',
			russianWord: 'удар',
			englishWord: 'stroke'
		},
		{
			id: '1319',
			russianWord: 'сильный',
			englishWord: 'strong'
		},
		{
			id: '1320',
			russianWord: 'сильно',
			englishWord: 'strongly'
		},
		{
			id: '1321',
			russianWord: 'структура',
			englishWord: 'structure'
		},
		{
			id: '1322',
			russianWord: 'борьба',
			englishWord: 'struggle'
		},
		{
			id: '1323',
			russianWord: 'студент',
			englishWord: 'student'
		},
		{
			id: '1324',
			russianWord: 'предлагать',
			englishWord: 'suggest'
		},
		{
			id: '1325',
			russianWord: 'предложение',
			englishWord: 'suggestion'
		},
		{
			id: '1326',
			russianWord: 'костюм',
			englishWord: 'suit'
		},
		{
			id: '1327',
			russianWord: 'подходящий',
			englishWord: 'suitable'
		},
		{
			id: '1328',
			russianWord: 'чемодан',
			englishWord: 'suitcase'
		},
		{
			id: '1329',
			russianWord: 'сумма',
			englishWord: 'sum'
		},
		{
			id: '1330',
			russianWord: 'резюме',
			englishWord: 'summary'
		},
		{
			id: '1331',
			russianWord: 'лето',
			englishWord: 'summer'
		},
		{
			id: '1332',
			russianWord: 'солнце',
			englishWord: 'sun'
		},
		{
			id: '1333',
			russianWord: 'воскресенье',
			englishWord: 'sunday'
		},
		{
			id: '1334',
			russianWord: 'начальник',
			englishWord: 'superior'
		},
		{
			id: '1335',
			russianWord: 'супермаркет',
			englishWord: 'supermarket'
		},
		{
			id: '1336',
			russianWord: 'снабжение',
			englishWord: 'supply'
		},
		{
			id: '1337',
			russianWord: 'поддержка',
			englishWord: 'support'
		},
		{
			id: '1338',
			russianWord: 'сторонник',
			englishWord: 'supporter'
		},
		{
			id: '1339',
			russianWord: 'полагать',
			englishWord: 'suppose'
		},
		{
			id: '1340',
			russianWord: 'конечно',
			englishWord: 'sure'
		},
		{
			id: '1341',
			russianWord: 'поверхность',
			englishWord: 'surface'
		},
		{
			id: '1342',
			russianWord: 'фамилия',
			englishWord: 'surname'
		},
		{
			id: '1343',
			russianWord: 'сюрприз',
			englishWord: 'surprise'
		},
		{
			id: '1344',
			russianWord: 'удивительный',
			englishWord: 'surprising'
		},
		{
			id: '1345',
			russianWord: 'качели',
			englishWord: 'swing'
		},
		{
			id: '1346',
			russianWord: 'переключатель',
			englishWord: 'switch'
		},
		{
			id: '1347',
			russianWord: 'набухший',
			englishWord: 'swollen'
		},
		{
			id: '1348',
			russianWord: 'символ',
			englishWord: 'symbol'
		},
		{
			id: '1349',
			russianWord: 'сочувственный',
			englishWord: 'sympathetic'
		},
		{
			id: '1350',
			russianWord: 'сочувствие',
			englishWord: 'sympathy'
		},
		{
			id: '1351',
			russianWord: 'система',
			englishWord: 'system'
		},
		{
			id: '1352',
			russianWord: 'стол',
			englishWord: 'table'
		},
		{
			id: '1353',
			russianWord: 'таблетка',
			englishWord: 'tablet'
		},
		{
			id: '1354',
			russianWord: 'решения',
			englishWord: 'tackle'
		},
		{
			id: '1355',
			russianWord: 'хвост',
			englishWord: 'tail'
		},
		{
			id: '1356',
			russianWord: 'принимать',
			englishWord: 'take'
		},
		{
			id: '1357',
			russianWord: 'принимать меры',
			englishWord: 'take action'
		},
		{
			id: '1359',
			russianWord: 'говорить',
			englishWord: 'talk'
		},
		{
			id: '1360',
			russianWord: 'высокий',
			englishWord: 'tall'
		},
		{
			id: '1361',
			russianWord: 'бак',
			englishWord: 'tank'
		},
		{
			id: '1362',
			russianWord: 'кран',
			englishWord: 'tap'
		},
		{
			id: '1363',
			russianWord: 'лента',
			englishWord: 'tape'
		},
		{
			id: '1364',
			russianWord: 'цель',
			englishWord: 'target'
		},
		{
			id: '1365',
			russianWord: 'задача',
			englishWord: 'task'
		},
		{
			id: '1366',
			russianWord: 'срок',
			englishWord: 'term'
		},
		{
			id: '1367',
			russianWord: 'ужасный',
			englishWord: 'terrible'
		},
		{
			id: '1368',
			russianWord: 'ужасно',
			englishWord: 'terribly'
		},
		{
			id: '1369',
			russianWord: 'тест',
			englishWord: 'test'
		},
		{
			id: '1370',
			russianWord: 'текст',
			englishWord: 'text'
		},
		{
			id: '1371',
			russianWord: 'чем',
			englishWord: 'than'
		},
		{
			id: '1372',
			russianWord: 'поблагодарить',
			englishWord: 'thank'
		},
		{
			id: '1373',
			russianWord: 'что',
			englishWord: 'that'
		},
		{
			id: '1374',
			russianWord: 'театр',
			englishWord: 'theatre'
		},
		{
			id: '1375',
			russianWord: 'их',
			englishWord: 'their'
		},
		{
			id: '1376',
			russianWord: 'тема',
			englishWord: 'theme'
		},
		{
			id: '1377',
			russianWord: 'затем',
			englishWord: 'then'
		},
		{
			id: '1378',
			russianWord: 'теория',
			englishWord: 'theory'
		},
		{
			id: '1379',
			russianWord: 'там',
			englishWord: 'there'
		},
		{
			id: '1380',
			russianWord: 'по тому',
			englishWord: 'therefore'
		},
		{
			id: '1381',
			russianWord: 'толстый',
			englishWord: 'thick'
		},
		{
			id: '1382',
			russianWord: 'густо',
			englishWord: 'thickly'
		},
		{
			id: '1383',
			russianWord: 'толщина',
			englishWord: 'thickness'
		},
		{
			id: '1384',
			russianWord: 'вор',
			englishWord: 'thief'
		},
		{
			id: '1385',
			russianWord: 'тонкий',
			englishWord: 'thin'
		},
		{
			id: '1386',
			russianWord: 'вещь',
			englishWord: 'thing'
		},
		{
			id: '1387',
			russianWord: 'галстук',
			englishWord: 'tie'
		},
		{
			id: '1388',
			russianWord: 'тугой',
			englishWord: 'tight'
		},
		{
			id: '1389',
			russianWord: 'плотно',
			englishWord: 'tightly'
		},
		{
			id: '1390',
			russianWord: 'до',
			englishWord: 'till'
		},
		{
			id: '1391',
			russianWord: 'время',
			englishWord: 'time'
		},
		{
			id: '1392',
			russianWord: 'расписание',
			englishWord: 'timetable'
		},
		{
			id: '1393',
			russianWord: 'олово',
			englishWord: 'tin'
		},
		{
			id: '1394',
			russianWord: 'крошечный',
			englishWord: 'tiny'
		},
		{
			id: '1395',
			russianWord: 'наконечник',
			englishWord: 'tip'
		},
		{
			id: '1396',
			russianWord: 'шина',
			englishWord: 'tire'
		},
		{
			id: '1397',
			russianWord: 'утомительный',
			englishWord: 'tiring'
		},
		{
			id: '1398',
			russianWord: 'название',
			englishWord: 'title'
		},
		{
			id: '1399',
			russianWord: 'сегодня',
			englishWord: 'today'
		},
		{
			id: '1400',
			russianWord: 'носок',
			englishWord: 'toe'
		},
		{
			id: '1401',
			russianWord: 'вместе',
			englishWord: 'together'
		},
		{
			id: '1402',
			russianWord: 'туалет',
			englishWord: 'toilet'
		},
		{
			id: '1403',
			russianWord: 'помидор',
			englishWord: 'tomato'
		},
		{
			id: '1404',
			russianWord: 'завтра',
			englishWord: 'tomorrow'
		},
		{
			id: '1405',
			russianWord: 'тонна',
			englishWord: 'ton'
		},
		{
			id: '1406',
			russianWord: 'тон',
			englishWord: 'tone'
		},
		{
			id: '1407',
			russianWord: 'язык',
			englishWord: 'tongue'
		},
		{
			id: '1408',
			russianWord: 'традиция',
			englishWord: 'tradition'
		},
		{
			id: '1409',
			russianWord: 'традиционный',
			englishWord: 'traditional'
		},
		{
			id: '1410',
			russianWord: 'трафик',
			englishWord: 'traffic'
		},
		{
			id: '1411',
			russianWord: 'поезд',
			englishWord: 'train'
		},
		{
			id: '1412',
			russianWord: 'обучение',
			englishWord: 'training'
		},
		{
			id: '1413',
			russianWord: 'передача',
			englishWord: 'transfer'
		},
		{
			id: '1414',
			russianWord: 'преобразование',
			englishWord: 'transform'
		},
		{
			id: '1415',
			russianWord: 'переводить',
			englishWord: 'translate'
		},
		{
			id: '1416',
			russianWord: 'перевод',
			englishWord: 'translation'
		},
		{
			id: '1417',
			russianWord: 'прозрачный',
			englishWord: 'transparent'
		},
		{
			id: '1418',
			russianWord: 'транспорт',
			englishWord: 'transport'
		},
		{
			id: '1419',
			russianWord: 'ловушка',
			englishWord: 'trap'
		},
		{
			id: '1420',
			russianWord: 'путешествовать',
			englishWord: 'travel'
		},
		{
			id: '1421',
			russianWord: 'путешественник',
			englishWord: 'traveller'
		},
		{
			id: '1422',
			russianWord: 'лечить',
			englishWord: 'treat'
		},
		{
			id: '1423',
			russianWord: 'лечение',
			englishWord: 'treatment'
		},
		{
			id: '1424',
			russianWord: 'дерево',
			englishWord: 'tree'
		},
		{
			id: '1425',
			russianWord: 'тенденция',
			englishWord: 'trend'
		},
		{
			id: '1427',
			russianWord: 'треугольник',
			englishWord: 'triangle'
		},
		{
			id: '1428',
			russianWord: 'трюк',
			englishWord: 'trick'
		},
		{
			id: '1429',
			russianWord: 'уродливый',
			englishWord: 'ugly'
		},
		{
			id: '1430',
			russianWord: 'конечный',
			englishWord: 'ultimate'
		},
		{
			id: '1431',
			russianWord: 'зонтик',
			englishWord: 'umbrella'
		},
		{
			id: '1432',
			russianWord: 'не в состоянии',
			englishWord: 'unable'
		},
		{
			id: '1433',
			russianWord: 'неприемлемый',
			englishWord: 'unacceptable'
		},
		{
			id: '1434',
			russianWord: 'неопределенный',
			englishWord: 'uncertain'
		},
		{
			id: '1435',
			russianWord: 'дядя',
			englishWord: 'uncle'
		},
		{
			id: '1436',
			russianWord: 'неудобный',
			englishWord: 'uncomfortable'
		},
		{
			id: '1437',
			russianWord: 'бессознательный',
			englishWord: 'unconscious'
		},
		{
			id: '1438',
			russianWord: 'под',
			englishWord: 'under'
		},
		{
			id: '1439',
			russianWord: 'под контролем',
			englishWord: 'under control'
		},
		{
			id: '1440',
			russianWord: 'метро',
			englishWord: 'underground'
		},
		{
			id: '1441',
			russianWord: 'под',
			englishWord: 'underneath'
		},
		{
			id: '1442',
			russianWord: 'понять',
			englishWord: 'understand'
		},
		{
			id: '1443',
			russianWord: 'понимание',
			englishWord: 'understanding'
		},
		{
			id: '1444',
			russianWord: 'подводный',
			englishWord: 'underwater'
		},
		{
			id: '1445',
			russianWord: 'нижнее белье',
			englishWord: 'underwear'
		},
		{
			id: '1446',
			russianWord: 'отменить',
			englishWord: 'undo'
		},
		{
			id: '1447',
			russianWord: 'безработица',
			englishWord: 'unemployment'
		},
		{
			id: '1448',
			russianWord: 'несправедливый',
			englishWord: 'unfair'
		},
		{
			id: '1449',
			russianWord: 'несправедливо',
			englishWord: 'unfairly'
		},
		{
			id: '1450',
			russianWord: 'нестационарных',
			englishWord: 'unsteady'
		},
		{
			id: '1451',
			russianWord: 'неудачный',
			englishWord: 'unsuccessful'
		},
		{
			id: '1452',
			russianWord: 'неопрятный',
			englishWord: 'untidy'
		},
		{
			id: '1453',
			russianWord: 'не желают',
			englishWord: 'unwilling'
		},
		{
			id: '1454',
			russianWord: 'неохотно',
			englishWord: 'unwillingly'
		},
		{
			id: '1455',
			russianWord: 'верхний',
			englishWord: 'upper'
		},
		{
			id: '1456',
			russianWord: 'расстройство',
			englishWord: 'upset'
		},
		{
			id: '1457',
			russianWord: 'осадки',
			englishWord: 'upsetting'
		},
		{
			id: '1458',
			russianWord: 'с ног на голову',
			englishWord: 'upside down'
		},
		{
			id: '1459',
			russianWord: 'наверх',
			englishWord: 'upstairs'
		},
		{
			id: '1460',
			russianWord: 'вверх',
			englishWord: 'upward'
		},
		{
			id: '1461',
			russianWord: 'вверх',
			englishWord: 'upwards'
		},
		{
			id: '1462',
			russianWord: 'городской',
			englishWord: 'urban'
		},
		{
			id: '1463',
			russianWord: 'срочный',
			englishWord: 'urgent'
		},
		{
			id: '1464',
			russianWord: 'использовать',
			englishWord: 'use'
		},
		{
			id: '1465',
			russianWord: 'полезный',
			englishWord: 'useful'
		},
		{
			id: '1466',
			russianWord: 'бесполезный',
			englishWord: 'useless'
		},
		{
			id: '1467',
			russianWord: 'пользователь',
			englishWord: 'user'
		},
		{
			id: '1468',
			russianWord: 'обычный',
			englishWord: 'usual'
		},
		{
			id: '1469',
			russianWord: 'отпуск',
			englishWord: 'vacation'
		},
		{
			id: '1470',
			russianWord: 'действительный',
			englishWord: 'valid'
		},
		{
			id: '1471',
			russianWord: 'насильственный',
			englishWord: 'violent'
		},
		{
			id: '1472',
			russianWord: 'видимый',
			englishWord: 'visible'
		},
		{
			id: '1473',
			russianWord: 'зрение',
			englishWord: 'vision'
		},
		{
			id: '1474',
			russianWord: 'визит',
			englishWord: 'visit'
		},
		{
			id: '1475',
			russianWord: 'посетитель',
			englishWord: 'visitor'
		},
		{
			id: '1476',
			russianWord: 'жизненно важный',
			englishWord: 'vital'
		},
		{
			id: '1477',
			russianWord: 'словарь',
			englishWord: 'vocabulary'
		},
		{
			id: '1478',
			russianWord: 'голос',
			englishWord: 'voice'
		},
		{
			id: '1479',
			russianWord: 'объем',
			englishWord: 'volume'
		},
		{
			id: '1480',
			russianWord: 'голосование',
			englishWord: 'vote'
		},
		{
			id: '1481',
			russianWord: 'заработная плата',
			englishWord: 'wage'
		},
		{
			id: '1482',
			russianWord: 'талия',
			englishWord: 'waist'
		},
		{
			id: '1483',
			russianWord: 'подождать',
			englishWord: 'wait'
		},
		{
			id: '1484',
			russianWord: 'официант',
			englishWord: 'waiter'
		},
		{
			id: '1485',
			russianWord: 'ходить',
			englishWord: 'walk'
		},
		{
			id: '1486',
			russianWord: 'ходьба',
			englishWord: 'walking'
		},
		{
			id: '1487',
			russianWord: 'стена',
			englishWord: 'wall'
		},
		{
			id: '1488',
			russianWord: 'бумажник',
			englishWord: 'wallet'
		},
		{
			id: '1489',
			russianWord: 'блуждать',
			englishWord: 'wander'
		},
		{
			id: '1490',
			russianWord: 'необходимость',
			englishWord: 'want'
		},
		{
			id: '1491',
			russianWord: 'война',
			englishWord: 'war'
		},
		{
			id: '1492',
			russianWord: 'весить',
			englishWord: 'weigh'
		},
		{
			id: '1493',
			russianWord: 'вес',
			englishWord: 'weight'
		},
		{
			id: '1494',
			russianWord: 'приветствовать',
			englishWord: 'welcome'
		},
		{
			id: '1495',
			russianWord: 'хорошо',
			englishWord: 'well'
		},
		{
			id: '1496',
			russianWord: 'на запад',
			englishWord: 'west'
		},
		{
			id: '1497',
			russianWord: 'западный',
			englishWord: 'western'
		},
		{
			id: '1498',
			russianWord: 'мокрый',
			englishWord: 'wet'
		},
		{
			id: '1499',
			russianWord: 'любой',
			englishWord: 'whatever'
		},
		{
			id: '1500',
			russianWord: 'колесо',
			englishWord: 'wheel'
		},
		{
			id: '1501',
			russianWord: 'когда',
			englishWord: 'when'
		},
		{
			id: '1502',
			russianWord: 'всякий раз, когда',
			englishWord: 'whenever'
		},
		{
			id: '1503',
			russianWord: 'где',
			englishWord: 'where'
		},
		{
			id: '1504',
			russianWord: 'в то время как',
			englishWord: 'whereas'
		},
		{
			id: '1505',
			russianWord: 'где',
			englishWord: 'wherever'
		},
		{
			id: '1506',
			russianWord: 'ли',
			englishWord: 'whether'
		},
		{
			id: '1507',
			russianWord: 'в то время как',
			englishWord: 'while'
		},
		{
			id: '1509',
			russianWord: 'шепот',
			englishWord: 'whisper'
		},
		{
			id: '1510',
			russianWord: 'свист',
			englishWord: 'whistle'
		},
		{
			id: '1511',
			russianWord: 'белый',
			englishWord: 'white'
		},
		{
			id: '1512',
			russianWord: 'кто бы ни',
			englishWord: 'whoever'
		},
		{
			id: '1513',
			russianWord: 'c',
			englishWord: 'with'
		},
		{
			id: '1514',
			russianWord: 'снять',
			englishWord: 'withdraw'
		},
		{
			id: '1515',
			russianWord: 'в',
			englishWord: 'within'
		},
		{
			id: '1516',
			russianWord: 'без',
			englishWord: 'without'
		},
		{
			id: '1517',
			russianWord: 'свидетель',
			englishWord: 'witness'
		},
		{
			id: '1518',
			russianWord: 'женщина',
			englishWord: 'woman'
		},
		{
			id: '1519',
			russianWord: 'чудо',
			englishWord: 'wonder'
		},
		{
			id: '1520',
			russianWord: 'чудесный',
			englishWord: 'wonderful'
		},
		{
			id: '1521',
			russianWord: 'дерево',
			englishWord: 'wood'
		},
		{
			id: '1522',
			russianWord: 'деревянный',
			englishWord: 'wooden'
		},
		{
			id: '1523',
			russianWord: 'шерсть',
			englishWord: 'wool'
		},
		{
			id: '1524',
			russianWord: 'слово',
			englishWord: 'word'
		},
		{
			id: '1525',
			russianWord: 'работа',
			englishWord: 'work'
		},
		{
			id: '1526',
			russianWord: 'рабочий',
			englishWord: 'worker'
		},
		{
			id: '1527',
			russianWord: 'рабочий',
			englishWord: 'working'
		},
		{
			id: '1528',
			russianWord: 'мир',
			englishWord: 'world'
		},
		{
			id: '1529',
			russianWord: 'беспокоиться',
			englishWord: 'worry'
		},
		{
			id: '1531',
			russianWord: 'поклоняться',
			englishWord: 'worship'
		},
		{
			id: '1532',
			russianWord: 'стоимость',
			englishWord: 'worth'
		},
		{
			id: '1533',
			russianWord: 'рана',
			englishWord: 'wound'
		}
	];

	constructor(private _httpClient: HttpClient) { }
	public getRandomWord(): Word {
		const rand: number = Math.floor(Math.random() * this.words.length);
		const randWord: Word = this.words[rand];
		return randWord;
	}


	public loadWordList(): Observable<Word[]> {
		const gettingDataFromLocalStorage: any = localStorage.getItem(DataGameService.wordsforLearningLSKey);
		if (gettingDataFromLocalStorage) {
			const wordsStorageString: any = gettingDataFromLocalStorage;
			const wordsStorage: any = JSON.parse(wordsStorageString); // массив объеков ru-eng;
			return of(wordsStorage).pipe(
				map((items: Word[]) => items.map((item: Word) => item))
			);
		}
		return of([]);
	}
 
	public save(words: Word[]): void {
			const dataForLocalSrorageString: string = JSON.stringify(words);
			localStorage.setItem(DataGameService.wordsforLearningLSKey, dataForLocalSrorageString);
	}

	public addWordsDictionary(words: Word[]): void {
		const gettingDataFromLocalStorage: any = localStorage.getItem(DataGameService.wordsforLearningLSKey);
		if (gettingDataFromLocalStorage) {
			const wordsStorageString: any = gettingDataFromLocalStorage;
			const wordsStorage: any = JSON.parse(wordsStorageString);
			const dataForLocalSrorageConcat: Word[] = wordsStorage.concat(words);
			const dataForLocalSrorageString: string = JSON.stringify(dataForLocalSrorageConcat);
			localStorage.setItem(DataGameService.wordsforLearningLSKey, dataForLocalSrorageString);
		}  else {
			const dataForLocalStorage: string = JSON.stringify(words);
			localStorage.setItem(DataGameService.wordsforLearningLSKey, dataForLocalStorage);
		}
	}


// tslint:disable-next-line: max-file-line-count
}
