<?php declare(strict_types=1);
/**
 * @copyright Copyright (c) 2020 Robin Appelman <robin@icewind.nl>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OCA\Files_Antivirus\Scanner;

use OCA\Files_Antivirus\Item;
use OCA\Files_Antivirus\Status;

interface IScanner {
	public function getStatus();

	/**
	 * Synchronous scan
	 *
	 * @param Item $item
	 * @return Status
	 */
	public function scan(Item $item): Status;

	/**
	 * Async scan - new portion of data is available
	 *
	 * @param string $data
	 */
	public function onAsyncData($data);

	/**
	 * Async scan - resource is closed
	 *
	 * @return Status
	 */
	public function completeAsyncScan(): Status;

	/**
	 * Open write handle. etc
	 */
	public function initScanner();

	/**
	 * Scan a chunk of data synchronously
	 *
	 * @param string $data
	 * @return Status
	 */
	public function scanString(string $data): Status;
}
