<?php
/*
| -----------------------------------------------------
| PRODUCT NAME: 	MODERN POS
| -----------------------------------------------------
| AUTHOR:			pabloretana.me
| -----------------------------------------------------
| EMAIL:			info@pabloretana.me
| -----------------------------------------------------
| COPYRIGHT:		RESERVED BY pabloretana.me
| -----------------------------------------------------
| WEBSITE:			http://pabloretana.me
| -----------------------------------------------------
*/
final class Registry 
{
	private $data = array();

	public function get($key) 
	{
		return (isset($this->data[$key]) ? $this->data[$key] : null);
	}

	public function set($key, $value) 
	{
		$this->data[$key] = $value;
	}

	public function has($key) 
	{
		return isset($this->data[$key]);
	}
}