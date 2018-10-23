import BOSSES from 'data/BOSSES'
import JOBS from 'data/JOBS'

import CORE from './core'
import MNK from './jobs/mnk'
import NIN from './jobs/nin'
import SMN from './jobs/smn'
import WAR from './jobs/war'
import MCH from './jobs/mch'
import DRG from './jobs/drg'
import RDM from './jobs/rdm'
import AST from './jobs/ast'
import BLM from './jobs/blm'

export default {
	CORE,

	JOBS: {
		[JOBS.MONK.logType]: MNK,
		[JOBS.NINJA.logType]: NIN,
		[JOBS.SUMMONER.logType]: SMN,
		[JOBS.BLACK_MAGE.logType]: BLM,
		[JOBS.RED_MAGE.logType]: RDM,
		[JOBS.WARRIOR.logType]: WAR,
		[JOBS.WHITE_MAGE.logType]: () => import('./jobs/whm' /* webpackChunkName: "jobs-whm" */),
		[JOBS.PALADIN.logType]: () => import('./jobs/pld' /* webpackChunkName: "jobs-pld" */),
		[JOBS.SCHOLAR.logType]: () => import('./jobs/sch' /* webpackChunkName: "jobs-sch" */),
		[JOBS.BARD.logType]: () => import('./jobs/brd' /* webpackChunkName: "jobs-brd" */),
		[JOBS.SAMURAI.logType]: () => import('./jobs/sam' /*webpackChunkName: "jobs-sam" */),
		[JOBS.ASTROLOGIAN.logType]: AST,
		[JOBS.DARK_KNIGHT.logType]: () => import('./jobs/drk' /* webpackChunkName: "jobs-drk" */),
		[JOBS.MACHINIST.logType]: MCH,
		[JOBS.DRAGOON.logType]: DRG,
	},

	BOSSES: {
		[BOSSES.BAHAMUT_PRIME.logId]: () => import('./bosses/bahamutPrime' /* webpackChunkName: "bosses-bahamutPrime" */),
		[BOSSES.DEMON_CHADARNOOK.logId]: () => import('./bosses/chadarnook' /* webpackChunkName: "bosses-chadarnook" */),
	},
}
